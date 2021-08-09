namespace SpriteKind {
    export const Sokobox = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
})
function SetColors () {
    color.setColor(15, color.rgb(38, 36, 51))
    color.setColor(7, color.rgb(130, 172, 149))
    color.setColor(3, color.rgb(189, 95, 149))
    color.setColor(4, color.rgb(199, 143, 82))
    color.setColor(12, color.rgb(46, 29, 48))
}
function AddTilesAndSprites () {
    if (Math.percentChance(40)) {
        scene.setTile(15, img`
            f f f 7 f f f 7 
            f f f 7 f f f 7 
            7 7 7 7 7 7 7 7 
            7 f f f 7 f f f 
            7 f f f 7 f f f 
            7 7 7 7 7 7 7 7 
            f f f 7 f f f 7 
            7 7 7 7 7 7 7 7 
            `, true)
    } else if (Math.percentChance(25)) {
        scene.setTile(15, img`
            f f f 7 f f f 7 
            7 f f 7 7 f f 7 
            7 7 7 7 7 7 7 7 
            7 f f f 7 f f 7 
            7 7 f f 7 f f f 
            7 7 7 7 7 7 7 7 
            f f f 7 f f f 7 
            7 7 7 7 7 7 7 7 
            `, true)
    } else if (Math.percentChance(35)) {
        scene.setTile(15, img`
            f f f 7 f f f 7 
            f f f 7 f f f 7 
            7 7 7 7 7 7 7 7 
            7 f f f 7 f f f 
            7 7 7 7 7 7 7 7 
            f f f 7 f f f 7 
            f f f 7 f f f 7 
            7 7 7 7 7 7 7 7 
            `, true)
    }
    scene.setTile(7, img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        `, false)
    scene.setTile(12, img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        `, false)
    scene.setTile(4, img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        `, false)
    scene.setTile(3, img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        `, false)
    scene.placeOnRandomTile(mySprite, 12)
    scene.placeOnRandomTile(Sokobox, 4)
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "About") {
        game.setDialogFrame(img`
            ffffffffffffffffffffffffffffffffffffffffffffffff
            f7777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffff7f
            f7f777777777777777777777777777777777777777777f7f
            f7f777777777777777777777777777777777777777777f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f777777777777777777777777777777777777777777f7f
            f7f777777777777777777777777777777777777777777f7f
            f7ffffffffffffffffffffffffffffffffffffffffffff7f
            f7777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.setDialogTextColor(7)
        game.showLongText("Made in 72 Hours for the N8Jam. The game is a sokoban esque puzzle game set in the distant future run by robotic overlord. Your goal is to complete the puzzles to break into an unconscious ", DialogLayout.Center)
        game.showLongText("robotic guard's firewalls, and eventually break the system. Move the virus to the targets to disable the firewalls. If you hear an echoing thump, that should serve as an reminder that the unconcious robot is active. And though your mission isn't over, you have to flee.", DialogLayout.Center)
    } else if (option == "How to play") {
        game.setDialogFrame(img`
            ffffffffffffffffffffffffffffffffffffffffffffffff
            f7777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffff7f
            f7f777777777777777777777777777777777777777777f7f
            f7f777777777777777777777777777777777777777777f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f77ffffffffffffffffffffffffffffffffffffff77f7f
            f7f777777777777777777777777777777777777777777f7f
            f7f777777777777777777777777777777777777777777f7f
            f7ffffffffffffffffffffffffffffffffffffffffffff7f
            f7777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.setDialogTextColor(7)
        game.showLongText("Move with WASD or the arrow keys. Use WASD or arrow keys to push the boxed virus around, and into the target to move to the next level. ", DialogLayout.Center)
    } else {
        color.setColor(7, color.rgb(38, 36, 51), 750)
        timer.after(755, function () {
            Level = 1
            glitchesExe.destroy()
            blockMenu.closeMenu()
            blockMenu.setControlsEnabled(false)
            scene.setTileMap(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 
                7 7 7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 7 7 
                7 7 7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 7 7 
                7 7 7 7 7 f c 7 7 4 7 7 7 3 f 7 7 7 7 7 
                7 7 7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 7 7 7 
                7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, TileScale.Eight)
            mySprite = sprites.create(img`
                . c c c c c c . 
                c c . . . . c c 
                c . . c c . . c 
                c . c . . c . c 
                c . c . . . . c 
                c . . c c c c . 
                c . . . . . . . 
                . c c c c c c c 
                `, SpriteKind.Player)
            Sokobox = sprites.create(img`
                . c c c c c c . 
                c c c c c c c c 
                c . c c c c . c 
                c . c c c c . c 
                c c . c c . c c 
                c c . c c . c c 
                c c c . . c c c 
                . c c c c c c . 
                `, SpriteKind.Sokobox)
            AddTilesAndSprites()
            timer.after(50, function () {
                color.setColor(7, color.rgb(130, 172, 149), 750)
            })
        })
    }
})
let Level = 0
let Sokobox: Sprite = null
let mySprite: Sprite = null
let glitchesExe: Sprite = null
blockMenu.showMenu(["Play", "How to play", "About"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(15, 7)
glitchesExe = sprites.create(img`
    ....................................................................................................................
    .............7.....7......................77........................................................................
    .7777777.....77....7......................77........................................................................
    77.....77....77..........7................77........................................................................
    7.......7....77..........7................77........................................................................
    7.......77...77....7...777777......77777..77.7777........77777.......77777...........77777....7......7......7777....
    7.......77...77....7....77.......77.......777....77.....77...77....77..............777...77....7.....7....77....77..
    7............77....7.....7.......7........77......7....7......77...7...............7......77...77...77....7......7..
    7............77....7.....7......77........77......7....7.......7...7...............7......77....7...7....77......7..
    7............77....7.....7......77........77......7....7.......7...77..............7.......7....77.7.....77......77.
    7....77777...77....7.....7......77........77......7....7.......7....77.............7.......7.....777.....77......77.
    7.......77...77....7.....7......77........77......7....777777777......777..........777777777.....77......7777777777.
    7.......77...77....7.....7......77........77......7....7................77.........7.............777.....77.........
    7.......77...77....7.....7......77........77......7....7.................77........7............77.7.....77.........
    7.......77...77....7.....7......77........77......7....7..................7........7............7...7....77.........
    7.......7....77....7.....7.......7........77......7....7..................7..777...7...........77...77....7.........
    77.....77....77....7.....77......77.......77......7....77................77..777...77..........7.....7....77........
    ..777777......7....7......7777....777777..77......7......7777777...7777777...777....77777777..77.....77....7777777..
    `, SpriteKind.Player)
glitchesExe.setPosition(75, 23)
scene.setBackgroundColor(15)
SetColors()
