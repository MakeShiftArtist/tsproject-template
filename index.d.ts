declare module "add" {
    export function add(a: string, b: string): string;
    export function add(a: number, b: number): number;
    export default function add(a: any, b: any): any;
}
