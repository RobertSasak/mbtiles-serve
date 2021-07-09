declare module '@mapbox/mbtiles' {
    interface DB {
        getTile: (
            z: number,
            x: number,
            y: number,
            callback: (error: any, data: Buffer, headers: any) => void,
        ) => void
        putTile: (
            z: number,
            x: number,
            y: number,
            buffer: Buffer,
            callback: (error: any) => void,
        ) => void
        startWriting: (callback: (error: any) => void) => void
        stopWriting: (callback: (error: any) => void) => void
    }

    class Module {
        constructor(path: string, callback: (error: any, result: DB) => void)
    }

    export default Module
}
