module mahjong.play {

    export class Coordinates {
        
        public static SELF = {
            left: 40,
            bottom: 120
        };

        public static NEXT = {
            right: 10,
            top: 300
        };

        public static OPPOSITE = {
            right: 120,
            top: 40
        };

        public static PREVIOUS = {
            left: 10,
            top: 300
        };

    }
    
}
