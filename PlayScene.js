class PlayScene extends Phaser.Scene{

    constructor(){
        super({
            key : "play",
            physics : {
                system : "impact",
                gravtiy : 100
            }
        });
    }

    preload(){
        this.load.image("tile_image", "assets/jungle_tileset.png")
        this.load.tilemapTiledJSON("map", "assets/game_map.json")
        this.load.spritesheet('run_sheet', 'assets/run.png', {frameWidth : 21, frameHeight : 33}, 8)

        // embedd tiles to convert into JSON
    }

    create(){
        // this.add.text(100, 100, "Play", {fill : "#fff"})

        this.player = this.physics.add.sprite(100, 100, 'run_sheet');
        // this.run_anim = this.player.animations.add('run');
        // this.run_anim.play();

        var map = this.add.tilemap('map')

        var tileset = map.addTilesetImage("jungle_tiles", "tile_image")

        var layer = map.createStaticLayer("main", tileset);

        var items = map.createFromObjects("items", 16, {}, this)

        console.log(items)
    }

}