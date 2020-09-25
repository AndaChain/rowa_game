/**
 * scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
 * 
 * })
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // if character is stand on the platform or ground can jump
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    game.over(false, effects.melt)
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777f777777777777777777777777777777777777777777777777ffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ff777777ff7777777777777777777777777777777777777777777777ffeeef777777777f7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    f77777fff7777777777777777777777777777ffffff77777f777777feeeef777777777f7777777ff77777777777777777777777777777777777777777777777777777777777777777777777777777777
    f7777ff6f777777777777777777777777777ff77777f777ff7777ffeeeeef7777777ff77777777f77777777777777777777777ff7777f77777777f777777777777777777777777777777777777777777
    f777f666f77777777777777777777777777fff7777f777fff77ff77feeeef77777ff7f7777777ff777777777777777777777fff7777ff77777777f777777777777777777777777f7777777f777777777
    f7ff6666f777777777777f777777777777ff77f77f7777f7fff66ffeeeef7777ffeef7777777ff77777777f77777777777fff7f7777f77777777f7777777777ff777f77777777ff777777f7777777777
    6f666666f77777777777f777777777777ff7777ff77fffff66666feeeeefffffeeeef777777ff77777777ff777777777ffffff7777ff7777777ff777777777f7777ff77777777f7f777ff7fff7777777
    6666666f77777777777ffff77777777ff66ffff6fff6666666666feeeeeeeeeeeeef777777fff7777777f6f77777777ff7ff77777ff7777777f7f77777777ff777f7f7777777ffff77ff7feef7777777
    66666666f77777777ffeeeefff77fff6666666666666666666666feeeeeeeeeeeeef7777ff66f777777f666f777777ffff6f7777fef7777777fff7777777ff777ff7f777777f6ffffff7feef77777777
    666666666f77777ffeeeeeeeefff6666666666666666666666666feeeeeeeeeeeeef77ff666f77777fff6666fffffff6666fffffeeef7777fff66f7777fff777f66f777777f66feeeefffeef77777777
    6666666666fffffeeeeeeeeef66666666666666666666666666666feeeeeeeeeeeeeff666666f7fff666666666666666666666feeeeeffffeef666ffff66f77f666f77777f666feeeeeeeeef7777777f
    66666666666feeeeeeeeeeeef66666666666666666666666666666feeeeeeeeeeeeef66666666f666666666666666666666666feeeeeeeeeeef6666666666ff66666fffff666feeeeeeeeeef77777ff6
    666666666666feeeeeeeeeeef666666666666666666666666666666feeeeeeeeeeef666666666666666666666666666666666feeeeeeeeeeeef6666666666666666666666666fefeeeeeeeeffffff666
    666666666666feeeeeeeeeeef666666666666666666666666666666feeeeeeeeeeef666666666666666666666666666666666feeeeeeeeeeeef666666666666666666666666feefeeeeeeeef66666666
    6666666666666feeeeeeeeeeef666666666666666666666666666666feeeeeeeeeef66666666666666666666666666666666feeeeeeeeeeeeef666666666666666666666666feefeeeeeeeef66666666
    6666666666666feeeeeeeeeeef6666666666666666666666666666666feeeeeeeeef66666666666666666666666666666666feeeeeeeeeeeeeff66666666666666666666666feefeeeeeeeef66666666
    6666666666666feeeeeeeeeeeeff66666666666666666666666666666feeeeeeeeef6666666666666666666666666666666feeeeeeeeeeeeeeeef6666666666666666666666feefeeeeeeeef66666666
    6666666666666feeeeeeeeeeeeef666666666666666666666666666666feeefeeeef6666666666666666666666666666666feeeeeeeeeeeeeeeef6666666666666666666666feeeefeeeeeef66666666
    66666666666666feeeeeeeeeeeef666666666666666666666666666666feeeefeeeeff66666666666666666666666666666feeeeeeeeeeeeeeeeef666666666666666666666feeefeeeeeeef66666666
    66666666666666feeeeeeeeeeeeef666666666666666666666666666666feeeefeeeeef6666666666666666666666666666feeeeeeeeeeeeeeeeef666666666666666666666feeefffeeeeef66666666
    66666666666666feeeeeeeeeeeeef666666666666666666666666666666feeeefeeeeef666666666666666666666666666feeeeeeeeeeeeeeeeef6666666666666666666666feeeeeefeeef666666666
    66666666666666feeeeeeeeeeeeef666666666666666666666666666666feeeefeeeeeef66666666666666666666666666feeeeeeeeeeeeeeeeef6666666666666666666666feeeeeefeeef666666666
    66666666666666feeeeeeeeeeeeef666666666666666666666666666666feeeefeeeeeeef666666666666666666666666feeeeeeeeeeeeeeeeef666666666666666666666666feeeeeeeeef666666666
    66666666666666feeffeeeeeeeeef666666666666666666666666666666feeeeefeeeeeeeff6666666666666666666666feeeeeeeeefeeeeeeef666666666666666666666666feeeeeeeeef666666666
    66f66666666666feeefeeeeeeeeef666f66666666666666666666666666feeeeefeeeeeeeeeff66666666666666666666feeeeeeeffeeeeeeef66666666666666666666666666feeeeeeeef666666666
    6ff66666666666feeeefeeeeeeeef66f666666666666666666666666666feeeefeeeeeeeeeeeef666666666666666666fffeeeeefeeeeeeeeef66666666666666666666666666feeeeeeeef666666666
    ff666666666666feeeefeeeeeeeef6f6666ff666666666666f666666666ffeeefeeeeeeeeeeeeff666ff6666666666fffeeeeeeefeeeeeeeeef666666666666666666666666666feeeeeeef666666666
    ff66666666f6fffeeeefeeeeeeeef6f66ffbf66666666666f66666666fffeeeeefeeeeeeeeeeeff6fff66666666666fffeeeeeeefeeeeeeeef6666666666666666f66666666ff6feeeeeeeef66666666
    5ffff66fffff5feeeeefeeeeeeeeffbfffff66fff66ff6ff66666f6fffeeeeeeeefeeeeeeeeeefbf55f6666f6f66ff5feeeeeeeefeeeeeeeef6666666666ffff6ff666f666ff66fffeeeeeef66666f66
    55fbbfffbfff5feeeeefeeeeeeeef5ffbfbbfff666fffffffffffff55feeeeeeeefeeeeeeeeeeff555f66fffffff555feeeeeeefeeeeeeeef666666ff6ffffffff66ffffff5fffffeeeeeeef6666ff66
    55fbfffffff55feeeefeeeeeeeef55ffffffbf66ffeeeff555555555feeeeeeeeefeeeeeeeeeef55555fffffeeef5555feeeeeefeeeeeeeff6ffffff6666ffef66666ff5555555feeefeeefffffffdff
    555f555555555feeeefeeeeeeeef55555feeffffeeeeef5555555555feeeeeeeeeefeeeeeeeeef555555feeeeff55555feeeeeeefeeeeeeeff5555f666ffeeefffffff55555555feeefeeeef5555ff5f
    5555555555555feeeefeeeeeeeef55555feeeeeeeeeeff555555555feeeeeeeeeeefeeeeeeeef55555ffeeeef55555555feeeeeefeeeeeef5555555fff55feeeeeeeef5555555feeefeeeeef55555555
    555555555555feeeeefeeeeeeeef55555ffefeeeeeeef5555555555feeeeeeeeeefeeeeeeeef555555feeeeef555555555feeeeeefeeeeef555555555555feeeeeeeef555555feeeefeeeef555555555
    555555555555feeeeefeeeeeeeff555555fefeeeeeeef555555555feeeeeeeeeeefeeeeeeeef55555feeeeeef5555555555feeeeefeeeeef555555555555feeeeeeef555555feeeeefeeeef555555555
    555555555555feeeeefeeeeeeef55555555ffeeeeeeef555555555feeeeeeeeeefeeeeeeeef555555feeeeeef55555555555feeeefeeeeef55555555555ffeeeeeeef555555feeeefeeeeef555555555
    55555555555feeeeeefeeeeeeef55555555fefeeeeeef555555555feeeeeeeeeefeeeeeeef555555feeeeeeef55555555555feeefeeeeeef55555555555feeeeeeeef55555ffeeeefeeeef5555555555
    55555555555feeeeeefeeeeeeef55555555feefeeeeef555555555feeeeeeeeefeeeeeeef5555555feeeeeeef55555555555feeefeeeeeef55555555555feeeeeeef555555feeeeefeeeef5555555555
    55555555555feeeeeefeeeeeeef55555555ffeeeeeeef555555555feeeeeeeefeeeeeeeef5555555feeeeeef555555555555feefeeeeeeeef555555555ffeeeeeeef55555ffeeeefeeeeef5555555555
    5f55555555feeeeeefeeeeeeeef555555555feeeeeeef55555555feeeeeeeefeeeeeeeef55555555feefeeef55555555555feeefeeeeeeeef555555555ffeeeeeeef55555feeeefeeeeeef5555555555
    fffff55555feeeeeefeeeeeeeef555555555feeeeffef55555555feeeeeeeefeeeeeeeef55555555feefeeef55555555555feeefeeeeeeeef555555555feffeeeeef55555feeefeeeeeeef5555555555
    eeeefff555feeeeefeeeeeeeeef555555555feeeefeef55555555feeeeeeefeeeeeeeef555555555feefeeef55555555555feefeeeeeeeeef55555555feeeefeeeef55555feeefeeeeeeef5555555555
    eeeeeefffffeeeeefeeeeeeeef5555555555feeeefeef55555555feeeeeefeeeeeeeeef555555555feeefeef55555555555feeeeeeeeeeeef55555555ffeeefeeeef55555feeefeeeeeeef5555555555
    eeeeeefbbbfeeeeefeeeeeeeef555555555ffeeeefeef55555555feeeeeefeeeeeeeef5555555555feeeefef5555555555feeeeeeeeeeeeeff5555fffeeeeefeeeef5555ffeeefeeeeeef55555555555
    eeeeefbbbfeeeeeeefeeeeeeeff55555555ffeeeefeef55555555feeeeeeefeeeeeefeffff555555feeeeeff555555555ffeeeeeeeeeeeeeffffffeffeeeeeefeeffffffefeeefeeeeeefff55555555f
    eeeeefbbbfeeeeeeefeeeeeeefff555ffffefeeeeefeff5555555fffeeeeeefeeeeefeeeeefffff5feeeeefffffffffffeeeeeeeeeeeeeefeeeeeeefeeeeeeefeefeeeeeefeeeeeeeeeefeefffffffff
    eeeeefbbbfeeeeeeefeeeeeeeefefffeeeeefeeeeefeff55555555feeeeeeefeeeeefeeeeeeeeef5fffeeeffeeeeeeeefeeeeeeeeeeeeeefeeeeeeefeeeeeeefeefeeeeeefeeeeeeeeeefeeeeeeeeeee
    eeeeefbbbfeeeeeefeeeeeeeeefeeeeeeeeefeeeeefeff555555fffeeeeeefeeeeefeeeeeeeeeeeffeeeeffeeeeeeeeefeeeeeeeeeeeeefeeeeeeeefeeeeeefeeefeeeeeefeeeefeeeeefeeeeeeeeeee
    eeeeefbbbfeeeeeeefeeeeeeeefeeeeeeeeefeeeeefefef555ffeefeeeeeefeeeeefeeeeeeeeeeeefeeeeffeeeeeeeefeeeeeeeeeeeeeefeeeeeeeefeeeeeefeeefeeeeeefeeeefeeeeefeeeeeeeeeee
    eeeeefbbfeeeeeeeefeeeeeeeefeeeeeeeefeeeeeeffeeefffeeeefeeeeefeeeeeefeeeeeeeeeeeefeeeeffeeeeeeeefeeeeeeeeeeeeeefeeeeeeeefeeeeeefeeefeeeeeefeeeeeeeeeefeeeeeeeeeee
    eeeeefbbfeeeeeeeeefeeeeeeeffeeeeeeefeeeeefefeeeeeeeeeefeeeeefeeeeeefeeeeeeeeeeeefeeefefeeefeeeefeeeefeeeeeeeeffeeeeeeeefeeeeeeeeeeffeeeeefeeeeeefeeeffeeeeeeeeee
    eeeeeefbfeeeeeeeeefeeefeeeefeeeeeeefeeeeefffeeeeeeeeeeefeeeefeeeeefeeeeeeeeeeeeefeeeeffeeefeeefeeeeefeeeeeeeefeeeeeeeeefeeeeeeeeeeefeeeeeffeeeeefeeeefeeeeeeeeee
    eeeeeefbfeeeeeeeeefeeefeeeefeeeeeeffeeeeeffeeeeeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeefeeeeefeefeeeefeeeeeeeeeeeeefeeeeeeeeeeefeeeeeeeeeefeeeeeffeeeeefeeeefeeeeeeeeee
    eeeeeeeffeeeeeeeefeeeeefeeefeeefeefeeeeeeffeeeeeeeeeeeefeeeeeeeeeefeeeefeeeeeeefeeeeeefeefeeefeeeeeeeeeeeeeefeeeeefeeeeefeeeeeeeeefeeeeeef1feeefeeeeefefeeeeeeee
    eeeeeeefbfeeeeeefeeeeefeeeefeeefeefeeeeeeffeeeeeeeeeeefeeeeeeeeeeefeeeefeeeeeeefeeeeeefeeefeefeeeeeeeeeeeeeefeeeefeeeeeefeeeeeeeeefeeeeeef1feeefeeeeeffeeeeeeeee
    eeeeeefbbfeeeeefeeeeeefeeeefeefeeefeeeeeeffeeeeeeeeeeefeeeeeeeeeeefeeeeffeeeeeefeeeeeefeeefeefeeeeeeeeeeeeefeeeefeeeeeeefeeeeeeeeefeeeeeef1feeeeeeeeefefeeeeeeee
    eeeeeefbbfeeeeefeeeeeefeeeefeefeeefeeeeeeffeeeeeeeeeeefeeeeeeeeeeefeeeeefeeeeeefeeeeeefeefeeefeeeeeeeeeeeeefeeeefeeeeeeefeeeeeeeeefeeeeeef1feeeeeeeeefeefeeeeeee
    eeeeeefbbfeeeeefeeeeeefeeeefeefeeefeeeeefefeeeeeeeeeefeeeeeeeeeeeefeeeeefeeeeeefeeeeeefeefeeefeeeeeeeeeeeeefeeeeefeeeeeefeeeeeeeeefeeeeeeffeeeeeeeeeefeeefeeeeee
    eeeeeefbbfeeeefeeeeeefeeeeefeeefeefeeeefeefeeeeeeeeeefeeeeeeeeeeeefeeeefeeeeeefeeeeeeefeefeeefeeeeeeeeeeeeefeeeeefeeeeeefeeeeeeeeefeeeeeeffeeeeeeeeefeeeefeeeeee
    eeeeeefbbfeeeefeeeeeefeeeeefeeefefeeeeefeeffeeeeeeeeefeeeeeeeeeeeefeeeefeeeeeefeeeeeeefeefeeeffeeeeeeeeeeeefeeeeeefeeeeeefeeeeeeeefeeeeefffeeeeeeeeefeeefeeeeeee
    eeeeeefbbfeeeefeeeeeefeeeeefeeefefeeeeefeeefeeeeeeeefeeeeeeeeeeeeefeeeefeeeeefeeeeeeeefeeefeeefeeeeeeeeeeeefeeeeeefeeeeeeffeeeeeeefeeeeefeefeeeeeeeeefeefeeeeeee
    eeeeeefbbfeeeefeeeeeefeeeeefeeffefeeeeeefeefeeeeeeeefeeeeeeeeeeeeefeeefeeeeefeeeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeeeffeeeeefeeeeeeefeeeefeeeeeeeeeeeeefeefeeeeeee
    eeeeefbbbfeeefeeeeeeeefeeeefeeffefeeeeeefeeffeeeeeefeeeefeeeeeeeeefeeefeeeeefeeeeeefeeeffeeeeefeeeeeeefeeeefeeeeeeeeeeeeeefeeeeeeefeeeffeeeeeeeeeeeeffeeefeeeeee
    eeeeefbbffeefeeeeeeeeefeeeefeefeefeeeeefeeeefeeeeeefeeeefeeeeeeeeefeefeeeeeffeeeeeeefeeefeeeeefeeeeeeeefeeefeeeeeeeeeeeeeeefefffeefeefeeeeeeeeeeeeeefeeeefeeeeee
    eeeeefbbfeeefeeeeeeeeefeeeefeefeefeeeeefeeeefeeeeeffeeeefeeeeeeeeefeeffeeeefeeeeeeeefeeefeeeeeefeeeeeeeeeeeffeeeeeeeeeeeeeefeeeeeefeefeeeefeeeeeeeeefeeefeeeeeee
    eeeeefbbfeeefeeeeeeeefeeeefeeefeefeeeefeeeeefeeeeefeeeefeeeeeeeeeefeeeeeeefeeeeeeeefeeeefeeeeefeeeeeeeeeeeeefeeeeeeeeeeeeeefeeeeeefeefeeeefeeeeeeeeffeeeeeeeeeee
    eeeeefbbfeeefeeeeeeeefeeeefeeefeefeeeeefeeeefeeeeefeeeefeeeeeeeeeffeeeeeeefeeeeeeeefeeeefeeeeefeeeeeeeeeeeeefeeeeeeeeeeeeeefeeeeeefefeeeeeeeeeeeeeefeeeeeeeeeeee
    eeeeefbbfeefeeeeeeeefeeeefeeeefeeffeeeefeeeefeeeeefeeeeefeeeeeeeefeeeeeeeefeeeeeeeefeeeefeeeefeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeefefeeeeeeeeeeeeefeeeeeeeeeeeee
    eeeeefbfeeeefeeeeeeefeeeefeeeeeeeefeeeefeeeefeeeeeefeeeefeeeeeeefeeeeeeeeefeeeeeeefeeeeefeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeefefeeeeeeeeeeeeefeeeeeeeeeeeee
    eeeeefbfeeeeeeeeeeeeefeefeeeeeeeeeefeefeeeeefeeeeeeffeeeefeeeeefeeeeeeeeeefeeeeeeefeeeefeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeefefeefeeefeeeeeeeefeeeeeeeeeeeee
    eeeeefbfeeeeeeeeeeeeeeeefeeeeeeeeeefeefeeeeefeeeeefffeeffeeeeeefeeeeeeeeeefeeeeeeefeeeefeeefeeeeeeeeeeeeeeeeefeeeeefeeeeeefeeeeefefeefeeefeeeeeeeefeeeeeeeeeeeee
    eeeefbfeeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeefeeeeeefffeffeeeeeefeeeeeeeeeeefeeeeeeefeeeffeeefeeeeeeeeeeefeeeeefeeeeefeeeeefeeeeeefefeefeeefeeeeeeeefeeeeeeeeeeeee
    eeeefbfeeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeefeeeeeeeffeffeeeeeefeeeeeeeeeeefeeeeeeefeeefeeefeeeeeeeeeeeefeeeeeefeeeeeffeeefeeeeefeefeefeeefeeeeeeeefeeeeeefeeeeee
    eeeeffeeeeeeeeeeeeefeeefeeeeeeeeeefeeeeffeefeeeeeeefeefefeeeeefeeeeeeeeeeefeeeeeeefeeffeeefeeeeeeeeeeeeefeeeeefeeeeeeeeeefeeeefeeefeefeeefeeeeeeeeffeeeeefeeeeee
    eeeffeeeeeeeeeeeeeefeeefeeeeeeeeeefeeeeeefefeeeeeeefeffefeeeeefeeeeeeeeeeefeeeeeeefeefeeeeffeeeeeeeeeeeeefeeeeffeeeefeeeffeeeefeeeefeffeefeeeeeeeeeffeeeeeffeeee
    eeeffeeeeeeeeeeeeefeeeefeeeeeeeeeefeeeeeefefeeeeeeefeeefffeeeefeeeefeeeeeefeeeeeeefeffeeeeefeeeeeeeeeeeeefeeeeffeeeefeeefeeeeefeeeefefeeefeeeeeeeeeefffeeeefeeee
    eeffeeeeeeeeeeeeeefeeeefeeeeeeeeeefeeeeeefffeeeeeeefeeeeefeeeefeeefeeeeeeffeeeeeeefffeeeeeeefeeeeeeeeeeefffeeeffeeeefeeefeeeeefeeeefeffeeefeeeeeeeeefffeeefeeeee
    eefeeeeeeeeeeeeeeefeeeefeeeeeeeeeefeeeeefeeefeeeeeffeeeefeeeeefeeeefeeeeeffeeeeeeeeefeeeeeeefeeeeeeeeeeeeefeeefeeeeefeeefeeeeeefeeefeffeeeefeeeeeeeefeeeeefeeeee
    eefeeeeeeeeeeeeeeefeeeefeeeeeeffeeffeeeefeeeefeeeeefeeeeffeeeefeeeefeeeeefeeeeeeeeeffeeeeeeefeeeeeeeeeeeeeeeeefeeeeefeeffeeeeeefeeefeffeeeefffeeeeeefeeeeeefeeee
    efeeeeeeeeeeeeeeefeeeeefeeeeeefeeefeeeeeefeeefeeeeefeefeeefeeefeeeefeeeeefeeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeeeffeeeefeefeeeeeefeeeefeefeeeeeeeeeeeeeefeeeeefeeee
    efeeeeeeeeeeeeeefeeeeeefeeeeefeeeefeeeeeeeffefeeeeefeeeffeefeeffeeeefeeeefeeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeeeefeeeffeeeffeeeefeeeefeefeeeeeeeeeeeeeefeeeeeefeee
    efeeeeeeeeeeeeeefeeeeeefeeeeefeeeefeeeeeeeeeeffeeeeefeeeeeefeeefeeeefeeeefeeeeefeeeeeffeeeeffeeeeeeeeeeeeeeeeeefeeeeeeeefeeeeeeeeeefeefeeeeeeeeefeeeefeeeeeefeee
    efeeeeeeeeeeeeefeeeeeeefeeeeefeeeeffeeeeeeeeeeffeeeeffeeeeefeeefeeeefeeeefeeeeffeeeeeefeeeefeeeeeeefeeeeeeeeeeeffeeeeeeefeeeeeeeeeefeeeffeeeeeeefeeeeffeeeeeeeee
    efeeeeeeeeeeeeeefeeeeeefeeeeefeeeefeeeeeeeeeeeffeeeeefeeeeefeeeefeefeeeeefeeeeefeeeeeffeeeefeeeeeeefeeeeeeeeeeeffeeeeeefeeeeeeeeeeefeeeefeeeeeeeefeeeefeeeeeeeee
    efeeeeeeeeeeeeeeefeeeeefeeeefeeeeefeeeeeeeeeeefeeeeefeeeeefeeeeefeefeeeeefeeeeeeeeeeefeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeefeeeeeeeeeefeeeeeffeeeeeeeeffeefeeeeeeeee
    efeeeeeeeeeeeeeeefeeeeefeeeefeeeeefeeeeeeeeeeefeeeeffeeeeeeeeeeefeeeeeeeefeeeeeeeeeeffeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeeffeeeeeeeeefeeeeeffeeeeeeeeeeeefeeeeeeeee
    efeeeeeeeeeeeeeeefeeeeefeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeefeeeeeeeeefeeeeeeeeeeefeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeee
    efeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeeeefeeeeeeeeeeefeeeeefeeeeeeeeefeeeeeeeeeeefeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeeee
    efeeeeeeeeeeeeeeeefeeeeefeeeeeeeeefeeeeeeeeeeefeeeeeeeeeeefeeeeefeeeeeeeefeeeeeeeeeeeefeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeeee
    efeeeeeeeeeeeeeeeefeeeeefeeeeeeeeefeeeeeeeeeeefeeeeeeeeeefeeeeeeefeeeeeeefeeeeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeeefeeeeeeeeeeefeeeeeeee
    feeeeeeeeeeeeeeeeefeeeffeeeeeeeeeefeeeeeeeeeeefeeeeeeeeeefeeeeeeefeeeeeeefeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeeefeeeeeeeeeeefeeeeeeee
    feeeeeeeeeeeeeeeeefeeeffeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeefeeeeeeeeeeefeeeeeeee
    feeeeeeeeeeeeeeeeefeeeffeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeefeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeefeeeeeeeefeeeeeeeeefeeeeeefeeeeeeeeeeefeeeeeeee
    feeeeeeeeeeeeeeeeefeeeffeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeefeeeeeeeefeeeeeeeeefeeeeeefeeeeeeeeeeefeeeeeeee
    efeeeeeeeeeeeeeeeefeeeefeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeeefeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeeeeeeefeeeeeeefeeeeeeeeeefeeeeeefeeeeeeeeeeefeeeeeeee
    efeeeeeeeeeeeeeeeefeeeffeeeeeeeeeeefeeeeeeeeeeefeeeeeeeeeffeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeefeeeeeeeeeeefeeeefeeeeeeeeeeeefeeeeeeee
    eefeeeeeeeeeeeeeeefeeeefeeeeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeffeeeeeefeeeeeeefeeeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeefeeeeeeeeeeefeeeefeeeeeeeeeeeeefeeeeeee
    eefeeeeeeeeeeeeeeefeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeefeeeeefeeeeeeeefeeeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeeefeeeeeeefeeeeeeeeeeefeeeefeeeeeeeeeeeeefeeeeeee
    eeefeeeeeeeeeeeeeefeeeefeeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeeeefeeeefeeeeeeeeefeeeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeefeeeefeeeeeeeeeeeeefeeeeeee
    eeefeeeeeeeeeeeeeefeeeeefeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeeeefeeeefeeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeeeeeeeeeeeefeeeeeeeefeeeeeeeeeefeeeeefeeeeeeeeeeeeefeeeeeee
    eeefeeeeeeeeeeeeeefeeeeefeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeeeefeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeee
    eeefeeeeeeeeeeeeeefeeeeefeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeeeefeeeeefeeeeeeeeefeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeee
    eeeefeeeeeeeeeeeffeeeeeefeeeeeeeeeeefeeeeeeeeefeeeeeeeeeeeefeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeefeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeefeeeeeeeeeeeefeeeeeee
    eeeeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeefeeeeeeeeefeeeeeeeeeeeefeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeefeeeeeeeeeeefeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeefeeeeee
    `)
// tile
tiles.setTilemap(tilemap`level_0`)
// main character
mySprite = sprites.create(img`
    ................................
    ...........ffffffff.............
    .........ffffffffffff...........
    ........ffffffffffffff..........
    ........ffffff44444ffff.........
    ........ffff44444444fff.........
    .......ffff4444444444ff.........
    .......fff44fff44fff44f.........
    .......fff444ff444ff44f.........
    .......fff444444444444f.........
    .......fff444444444444f.........
    .......ffff4444444444ff.........
    .......fffff444fff44ff..........
    .......ffffff444444ff...........
    ........ffffff4444ff............
    .........fff.ffffff.............
    .........fff..f44f..............
    .........fffffffffff............
    ..........fffeeffeefff..........
    ..........feeeeeeeeeef..........
    ..........feefe88efeef..........
    ..........feefee8efeef..........
    ..........feefeeeefeef..........
    ..........f44feeeef44f..........
    ..........f44fff5ff44f..........
    ...........f4fbbbbf4f...........
    ............ffbbbbff............
    .............fbbbbf.............
    .............fbbfbf.............
    .............fbbfbf.............
    .............fffffff............
    .............feeefeef...........
    `, SpriteKind.Player)
// controll main character
controller.moveSprite(mySprite, 80, 0)
// gravity in the game
mySprite.ay = 294
mySprite.setPosition(9, 96)
// animation
animation.runImageAnimation(
mySprite,
[img`
    ................................
    ...........ffffffff.............
    .........ffffffffffff...........
    ........ffffffffffffff..........
    ........ffffff44444ffff.........
    ........ffff44444444fff.........
    .......ffff4444444444ff.........
    .......fff44fff44fff44f.........
    .......fff444ff444ff44f.........
    .......fff444444444444f.........
    .......fff444444444444f.........
    .......ffff4444444444ff.........
    .......fffff444fff44ff..........
    .......ffffff444444ff...........
    ........ffffff4444ff............
    .........fff.ffffff.............
    .........fff..f44f..............
    .........fffffffffff............
    ..........fffeeffeefff..........
    ..........feeeeeeeeeef..........
    ..........feefe88efeef..........
    ..........feefee8efeef..........
    ..........feefeeeefeef..........
    ..........f44feeeef44f..........
    ..........f44fff5ff44f..........
    ...........f4fbbbbf4f...........
    ............ffbbbbff............
    .............fbbbbf.............
    .............fbbfbf.............
    .............fbbfbf.............
    .............fffffff............
    .............feeefeef...........
    `,img`
    ................................
    ...........ffffffff.............
    .........ffffffffffff...........
    ........ffffffffffffff..........
    ........ffffff44444ffff.........
    ........ffff44444444fff.........
    .......ffff4444444444ff.........
    .......fff44fff44fff44f.........
    .......fff444ff444ff44f.........
    .......fff444444444444f.........
    .......fff444444444444f.........
    .......ffff4444444444ff.........
    .......fffff444fff44ff..........
    .......ffffff444444ff...........
    ........ffffff4444ff............
    .........fff.ffffff.............
    .........fff..f44f..............
    .........fffffffffff............
    ..........fffeeffeefff..........
    ..........feeeeeeeeeef..........
    ..........feefe88efeef..........
    ..........feefee8efeef..........
    ..........feefeeeefeef..........
    ..........f44feeeef44f..........
    ..........f44fff5ff44f..........
    ...........f4fbbbbf4f...........
    ............ffbbbbff............
    .............fbbbbf.............
    .............fbbfbf.............
    .............fbbfbf.............
    .............fffffff............
    .............feefeeef...........
    `],
500,
false
)
// updating game
game.onUpdate(function () {
    mySprite.setImage(img`
        ................................
        ...........ffffffff.............
        .........ffffffffffff...........
        ........ffffffffffffff..........
        ........ffffff44444ffff.........
        ........ffff44444444fff.........
        .......ffff4444444444ff.........
        .......fff44fff44fff44f.........
        .......fff444ff444ff44f.........
        .......fff444444444444f.........
        .......fff444444444444f.........
        .......ffff4444444444ff.........
        .......fffff444fff44ff..........
        .......ffffff444444ff...........
        ........ffffff4444ff............
        .........fff.ffffff.............
        .........fff..f44f..............
        .........fffffffffff............
        ..........fffeeffeefff..........
        ..........feeeeeeeeeef..........
        ..........feefe88efeef..........
        ..........feefee8efeef..........
        ..........feefeeeefeef..........
        ..........f44feeeef44f..........
        ..........f44fff5ff44f..........
        ...........f4fbbbbf4f...........
        ............ffbbbbff............
        .............fbbbbf.............
        .............fbbfbf.............
        .............fbbfbf.............
        .............fffffff............
        .............feeefeef...........
        `)
    scene.centerCameraAt(mySprite.x, 0)
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
})
