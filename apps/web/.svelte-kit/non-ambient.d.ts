
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/editor";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/editor": Record<string, never>
		};
		Pathname(): "/" | "/editor";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/o0.woff2" | "/fonts/o1.woff2" | "/fonts/o2.woff2" | "/fonts/o3.woff2" | "/fonts/p0.woff2" | "/fonts/p1.woff2" | "/fonts/p10.woff2" | "/fonts/p11.woff2" | "/fonts/p12.woff2" | "/fonts/p13.woff2" | "/fonts/p14.woff2" | "/fonts/p15.woff2" | "/fonts/p16.woff2" | "/fonts/p17.woff2" | "/fonts/p18.woff2" | "/fonts/p19.woff2" | "/fonts/p2.woff2" | "/fonts/p20.woff2" | "/fonts/p21.woff2" | "/fonts/p22.woff2" | "/fonts/p23.woff2" | "/fonts/p24.woff2" | "/fonts/p25.woff2" | "/fonts/p26.woff2" | "/fonts/p27.woff2" | "/fonts/p28.woff2" | "/fonts/p29.woff2" | "/fonts/p3.woff2" | "/fonts/p30.woff2" | "/fonts/p31.woff2" | "/fonts/p32.woff2" | "/fonts/p33.woff2" | "/fonts/p34.woff2" | "/fonts/p35.woff2" | "/fonts/p36.woff2" | "/fonts/p37.woff2" | "/fonts/p38.woff2" | "/fonts/p39.woff2" | "/fonts/p4.woff2" | "/fonts/p40.woff2" | "/fonts/p41.woff2" | "/fonts/p42.woff2" | "/fonts/p43.woff2" | "/fonts/p44.woff2" | "/fonts/p45.woff2" | "/fonts/p46.woff2" | "/fonts/p47.woff2" | "/fonts/p48.woff2" | "/fonts/p49.woff2" | "/fonts/p5.woff2" | "/fonts/p50.woff2" | "/fonts/p51.woff2" | "/fonts/p52.woff2" | "/fonts/p53.woff2" | "/fonts/p54.woff2" | "/fonts/p55.woff2" | "/fonts/p56.woff2" | "/fonts/p57.woff2" | "/fonts/p58.woff2" | "/fonts/p59.woff2" | "/fonts/p6.woff2" | "/fonts/p60.woff2" | "/fonts/p61.woff2" | "/fonts/p62.woff2" | "/fonts/p63.woff2" | "/fonts/p64.woff2" | "/fonts/p65.woff2" | "/fonts/p66.woff2" | "/fonts/p67.woff2" | "/fonts/p68.woff2" | "/fonts/p69.woff2" | "/fonts/p7.woff2" | "/fonts/p70.woff2" | "/fonts/p71.woff2" | "/fonts/p72.woff2" | "/fonts/p73.woff2" | "/fonts/p74.woff2" | "/fonts/p75.woff2" | "/fonts/p76.woff2" | "/fonts/p77.woff2" | "/fonts/p78.woff2" | "/fonts/p79.woff2" | "/fonts/p8.woff2" | "/fonts/p80.woff2" | "/fonts/p81.woff2" | "/fonts/p82.woff2" | "/fonts/p83.woff2" | "/fonts/p84.woff2" | "/fonts/p85.woff2" | "/fonts/p86.woff2" | "/fonts/p87.woff2" | "/fonts/p88.woff2" | "/fonts/p89.woff2" | "/fonts/p9.woff2" | "/fonts/p90.woff2" | "/fonts/p91.woff2" | "/fonts.css" | "/robots.txt" | string & {};
	}
}