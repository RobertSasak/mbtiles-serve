import MBTiles from '@mapbox/mbtiles'

interface DB {
    get: (z: number, x: number, y: number) => Promise<Buffer>
    put: (z: number, x: number, y: number, buffer: Buffer) => Promise<undefined>
    startWriting: () => Promise<undefined>
    stopWriting: () => Promise<undefined>
}

export default (path: string) =>
    new Promise<DB>(
        (resolve2, reject2) =>
            new MBTiles(path, (error2, result) => {
                if (error2) {
                    reject2(error2)
                }
                resolve2({
                    get: (z: number, x: number, y: number) =>
                        new Promise((resolve, reject) => {
                            result.getTile(z, x, y, (error, data) => {
                                if (error) {
                                    reject(error)
                                }
                                resolve(data)
                            })
                        }),
                    put: (z: number, x: number, y: number, buffer: Buffer) =>
                        new Promise((resolve, reject) => {
                            result.putTile(z, x, y, buffer, (error) => {
                                if (error) {
                                    reject(error)
                                }
                                resolve(undefined)
                            })
                        }),
                    startWriting: () =>
                        new Promise((resolve, reject) => {
                            result.startWriting((error) => {
                                if (error) {
                                    reject(error)
                                }
                                resolve(undefined)
                            })
                        }),
                    stopWriting: () =>
                        new Promise((resolve, reject) => {
                            result.stopWriting((error) => {
                                if (error) {
                                    reject(error)
                                }
                                resolve(undefined)
                            })
                        }),
                })
            }),
    )
