import { writable } from "svelte/store";

class Metadata {
    title: string = '';
    contactBlurb: string = '';
}

export const drawerOpen = writable(false);
export const metadata = writable(new Metadata());