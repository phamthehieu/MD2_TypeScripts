class Cylinder {
    public static baseArena(radius: number): number {

        return Math.PI * radius * radius
    }

    public static perimeter(radius: number): number {

        return 2 * Math.PI * radius
    }

    public static getVolume(radius: number, height: number): number {

        let baseArena: number = this.baseArena(radius)

        let perimeter: number = this.perimeter(radius)

        let volume: number = perimeter * height + 2 * baseArena;

        return volume;
    }
}

let result = Cylinder.getVolume(5, 10)

console.log(result)