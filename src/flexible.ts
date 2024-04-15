(function(win: Window, lib: any) {
    const doc: Document = win.document;
    const docEl: HTMLElement = doc.documentElement;
    let metaEl: HTMLMetaElement | null = doc.querySelector('meta[name="viewport"]');
    const flexibleEl: HTMLMetaElement | null = doc.querySelector('meta[name="flexible"]');
    let dpr: number = 0;
    let scale: number = 0;
    let tid: number | undefined;
    const flexible: any = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        const match: RegExpMatchArray | null = metaEl.getAttribute('content')?.match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(String(1 / scale));
        }
    } else if (flexibleEl) {
        const content: string | null = flexibleEl.getAttribute('content');
        if (content) {
            const initialDpr: RegExpMatchArray | null = content.match(/initial\-dpr=([\d\.]+)/);
            const maximumDpr: RegExpMatchArray | null = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
        }
    }

    if (!dpr && !scale) {
        const isAndroid: RegExpMatchArray | null = win.navigator.appVersion.match(/android/gi);
        const isIPhone: RegExpMatchArray | null = win.navigator.appVersion.match(/iphone/gi);
        const devicePixelRatio: number = win.devicePixelRatio;
        if (isIPhone) {
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', String(dpr));
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            const wrap: HTMLDivElement = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(): void {
        let width: number = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        const rem: number = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e: PageTransitionEvent) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e: Event) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }

    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d: string | number): string | number {
        let val: string | number = parseFloat(String(d)) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d: string | number): string | number {
        let val: string | number = parseFloat(String(d)) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));
