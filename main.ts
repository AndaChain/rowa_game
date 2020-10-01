enum ActionKind
{
    MoveRight,
    MoveLeft,
    Idle,
    Walking,
    Jumping
}

let jk: jk_ch = null
let rowa: main_ch = null
let mainIdle = null
let mainRunLeft = null
let mainRunRight = null
let level = 0

class character
{

    entity: Sprite = null
    gravity: number = 294

    constructor(entity: Sprite)
    {
        this.entity = entity
        this.entity.ay = this.gravity
    }
    
    jump(jump_val: number)
    {
        function func()
        {
            // if character is stand on the platform or ground can jump
            if (this.entity.vy == 0) 
            {
                this.entity.vy = jump_val
            }
        }
        return func
    }

    walk_right(main:any ,frame_1 : any, frame_2: any)
    {
        function func()
        {
            animation.attachAnimation(this.entity, main)
            frame_1
            frame_2
        }
        console.log("I am walking to right")
        return func
    }

    walk_left(main:any ,frame_1 : any, frame_2: any)
    {
        function func()
        {
            //mainRunLeft = animation.createAnimation(ActionKind.MoveLeft, 100)
            animation.attachAnimation(this.entity, main)
            frame_1
            frame_2
        }
        console.log("I am walking to left")
        return func
    }

    idle(main:any, frame_1 : any)
    {
        function func()
        {
            //mainIdle = animation.createAnimation(ActionKind.Idle, 100)
            animation.attachAnimation(this.entity, main)
            frame_1
        }
        console.log("I stay idle")
        return func
    }
}

class main_ch extends character
{
    constructor(entity: Sprite)
    {
        super(entity)
    }

    next()
    {
        function func()
        {
            level += 1
            next_level()
            for (let value of sprites.allOfKind(SpriteKind.Enemy))
            {
                value.destroy()
            }
        }
        return func
    }

    win()
    {
        function func()
        {
            game.over(true, effects.confetti)
        }
        return func
    }

    lose()
    {
        function func()
        {
            game.over(false, effects.melt)
        }
        return func
    }
}

class jk_ch extends character
{

    constructor(entity: Sprite)
    {
        super(entity)
        entity.ay = 0
    }

}

function next_level ()
{   
    if (level >= 0 && level <= 9)
    {
        // tile
        tiles.setTilemap(tilemap`level_0`)
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
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            f777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            9f77777777777777777ff7777777777777777777777777777777777777fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            99ff7777777777777ffeff7777777777777777777777777777777777ffeeeeef777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            999fff777777777ffeeeef77777777777777777777777777777777ffeeeeeeeef77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            999999f777777ff9feeeeef777777777777777777777777777777feeeeeeeeeeeff777777777777777777777777777777777ff7777777777777777777777777777777777777777777777777777777777
            9999999ffffff999feeeeeeff7777777777777777777777777fff9feeeeeeeeeeeefff7777777777777777777777777777ffeff777777777777777777777777777777777777777777777777777777777
            9999999999999999feeeeeeeeff77777777777777777777fff9999feeeeeeeeeeeeeefff7777777777777777777777ffffeeef9ff7777777777777777777777777777777777777777777777777777777
            9999999999999999feeeeeeeef9fff777777777777777ff99999999feeeeeeeeeeeeef99fff777777777ffffffffffeeeeeeff999f777777777777777777777777777777777777777777777777777777
            999999999999999feeeeeeeeef9999fffffffffffffff9999999999feeeeeeeeeeeeef99999fffffffff99feeeeeeeeeeeeef99999ff7777777777777777777777777777777777777777777777777777
            999999999999999feeeeeeeeef9999999999999999999999999999feeeeeeeeeeeeeef9999999999999999feeeeeeeeeeeeef9999999f77777777777777777777777777777777777777777777777ffff
            999999999999999feeeeeeeeef9999999999999999999999999999feeeeeeeeeeeeeef999999999999999feeeeeeeeeeeeeef99999999ff77777777777777777777777777777ff777777777777ffeeee
            99999999999999feeeeeeeeeeef999999999999999999999999999feeeeeeeeeeeeeef999999999999999feeeeeeeeeeeeeef9999999999ffff77777777777777777777777ff99ff7777777fffffeeee
            99999999999999feeeeeeeeeeef999999999999999999999999999feeeeeeeeeeeeeef999999999999999feeeeeeeeeeeeeef99999999999999ffff7777777777777777fff999999ff777ff9999feeee
            ff999999999999feeeeeeeeeeeef9999999999999999999999999feeeeeeeeeeeeeeef999999999999999feeeeeeeeeeeeeef999999999999999999fffff7777777ffffef999999999fff99999ffeeee
            7fff9999999999feeeeeeeeeeeef9999999999999999999999999feeeeeeeeeeeeeeef999999999999999feeeeeeeeeeeeef999999999999999999999feefffffffeeeeef99999999999999999feeeee
            777ffff999999feeeeeeeeeeeef99999999999999999999999999feeeeeeeeeeeeeef999999999999999feeeeeeeeeeeeeef999999999999999999999feeeeeeeeeeeeeef9999999999999999feeeeee
            7777777f9999feeeeeeeeeeeef999999999999999999999999999feeeeeeeeeeeeeeef99999999999999feeeeeeeeeeeeeff999999999999999999999feeeeeeeeeeeeeef9999999999999999feeeeee
            7777777ff999feeeeeeeeeeeef999999999999999999999999999feeeeeeeeeeeeeef999999999999999feeeeeeeeeeeeef9999999999999999999999feeeeeeeeeeeeeef999999999999999feeeeeee
            77777777ff99feeeeeeeeeeeef999999999999999999999999999feeeeeeeeeeeeeef9999999999999999feeeeeeeeeeeef9999999999999999999999feeeeeeeeeeeeeef999999999999999feeeeeee
            7777777777ffeeeeeeeeeeeeeef99999999999999999999999999feeeeeeeeeeeeeef9999999999999999feeeeeeeeeeeef9999999999999999999999feeeeeeeeeeeeeef99999999999999feeeeeeee
            7777777777ffeeeeeeeeeeeeeef99999999999999999999999999feeeeeeeeeeeeeef9999999999999999feeeeeeeeeeeef9999999999999999999999feeeeeeeeeeeeeef99999999999999feeeeeeee
            7777777777ffeeeeeeeeeeeeeef99999999999999999999999999feeeeeeeeeeeeeef999999999999999fffeeeeeeeeeeeff99999999999999999999feeeeeeeeeeeeeeef99999999999999feeeeeeee
            7777777777ffeeeeeeeeeeeeeef99999999999999999999999999feeeeeeeeeeeeeef99999999999999999feeeeeeeeeeeef9999999999999999999feeeeeeeeeeeeeeeef99999999999999feeeeeeee
            7777777777ffeeeeeeeeeeeeeef99999999fff999999999999999feeeeeeeeeeeeeef99999999999999999feeeeeeeeeeeef9999999999999999999feeeeeeeeeeeeeeeef999999999999999feeeeeee
            77777777777feeeeeeeeeeeeeef999999ff77fffffffffffffffffeeeeeeeeeeeeeef99999999999999999feeeeeeeeeeeff9999999999999999999feeeeeeeeeeeeeeeef999999999999999feeeeeee
            7777777777feeeeeeeeeeeeeeef99999ff7777777777777777777feeeeeeeeeeeeeef99999999999999999feeeeeeeeeeeff999999999999999999ffeeeeeeeeeeeeeeeff999999999999999feeeeeee
            7777777777feeeeeeeeeeeeeeef9999f777777777777777777777feeeeeeeeeeeeeef99999999999999999ffeeeeeeeeeeef9999999999999999fff7feeeeeeeeeeeeeef7999999999999999feeeeeee
            7777777777feeeeeeeeeeeeeeef99ff7777777777777777777777feeeeeeeeeeeeeff999999999999999999feeeeeeeeeeef9999999999999fffff7feeeeeeeeeeeeeeeef99999999999999feeeeeeee
            7777777777ffeeeeeeeeeeeeeef9f777777777777777777777777feeeeeeeeeeeeef9999999999999999999ffeeeeeeeeeef999999999999f777777feeeeeeeeeeeeeeeef99999999999999feeeeeeee
            7777777777ffeeeeeeeeeeeeefff777777777777777777777777feeeeeeeeeeeeeef9999999999999999999ffeeeeeeeeeeef9999999999f777777feeeeeeeeeeeeeeeeef9999999999999feeeeeeeee
            7777777777feeeeeeeeeeeeeefff777777777777777777777777feeeeeeeeeeeeeef999999999999999999999feeeeeeeeeef999999999f7777777feeeeeeeeeeeeeeeeef9999999999999feeeeeeeee
            77ff777777feeeeeeeeeeeeeeff7777777777777777777777777feeeeeeeeeeeeeef99999fffffff999999999ffeeeeeeeeee9999999ff7777777ffeeeeeeeeeeeeeeeeff9999999999999feeeeeeeee
            77ff777777feeeeeeeeeeeeeefff777777777777777777777777feeeeeeeeeeeeeef9999f777777fffff999999ffeeeeeeeeef9999fff777777777feeeeeeeeeeeeeeeef99999999999999feeeeeeeee
            77f7777777feeeeeeeeeeeeeeff7777777777777777777777777feeeeeeeeeeeeef999fff7777777777ffff999ffeeeeeeeeef99ff77f777777777fefeeeeeeeeeeeeeef99999999999999feeeeeeeee
            ffef777777feeeeeeeeeeeeeeff7777777777777777777777777feeeeeeeeeeeeef99f7777777777777777ff99ffeeeeeeeeef99f777f777777777ffeeeeeeeeeeeeeeef99999999999999feeeeeeeee
            feef777777feeeeeeeeeeeeeeff77777777777777777777777777eeeeeeeeeeeeef99f77777777777777777f99feeeeeeeeeef9ff7ff777777777feeeeeeeeeeeeeeeeef99999999999999feeeeeeeee
            eeef777777feeeeeeeeeeeeeef777777777777777777777777777feeeeeeeeeeeef9f777777777777777777ff9feeeeeeeeeefff7ff7777777777feeeeeeeeeeeeeeeeff9ffffffffffffffeeeeeeeee
            eeef777777feeeeeeeeeeeeeef777777777777777777777777777feeeeeeeeeeeeff77777777777777777777fffeeeeeeeeeeff77f777777777777feeeeeeeeeeeeeeff9ff77777777777ffeeeeeeeee
            eeef777777feeeeeeeeeeeeeef777777777777777777777777777feeeeeeeeeeef9f777777777777777777777ffeeeeeeeeeef777f777777777777feeeeeeeeeeeeeefff7777777777777ffeeeeeeeee
            eeef777777feeeeeeeeeeeeeef777777777777777777777777777feeeeeeeeeeeff7777777777777777777777feeeeeeeeeeef777f77777777777feeeeeeeeeeeeeefff7777777777777777feeeeeeee
            eeef777777feeeeeeeeeeeeeef777777777777777777777777777feeeeeeeeeeeff777777777777777777777feeeeeeeeeeeef777ff7777777777feeeeeeeeeeeeeeff77777777777777777feeeeeeee
            eeeef77777feeeeeeeeeeeeeef777777777777777777777777777ffeeeeeeeeeef7777777777777777777777feeeeeeeeeeeef77f777777777777feeeeeeeeeeeeeef777777777777777777eeeeeeeee
            eeeef77777ffeeeeeeeeeeeeef777777777777777777777777777feeeeeeeeeeef7777777777777777777777feeeeeeeeeeeef77f777777777777ffeeeeeeeeeeeeff77777777777777777feeeeeeeee
            eeef777777feeeeeeeeeeeeef7777777777777777777777777777feeeeeeeeeeef7777777777777777777777feeeeeeeeeeeef7f7777777777777ffeeeeeeeeeeeeff77777777777777777feeeeeeeee
            eeef77777ffeeeeeeeeeeeeef7777777777777777777777777777feeeeeeeeeeef777777777777777777777feeeeeeeeeeeeef7f7777777777777feeeeeeeeeeeeeff77777777777777777feeeeeeeee
            eeef77777ffeeeeeeeeeeeeef777777777ffffff77777ff777777feeeeeeeeeeef777777777777777777777feeeeeeeeeeeef77f7777777777777feeeeeeeeeeeeeff777777777777777777feeeeeeee
            eeef7777fefeeeeeeeeeeeeff777777777feeeefffffffff77777feeeeeeeeeeef777777777777777777777feeeeeeeeeeeef77f777777777777ffeeeeeeeeeeeeeff777777fff7777777777fefeeeee
            eefef7ffeefeeeeeefffffefff77777777feeeeeeefeeff7777777feeeeeeeeeef777777777777777777777feeeeeeeeeeeef77f777f777777777feeeeeeeeeeeefff777777ffeff777777777feeeeee
            eefeffeeeefeeeeeeff55fefef77777777feeeeeeeeeff77777777feeeeeeeeeef7777777777777777777777feeeeeeeeeeef7ff777777777777feeeeeeeeeeeeeefff777777feeff77777777ffeeeee
            eefeeeeeeefeeeeeeef555efef777777777feeeeeeeef77777777ffeeeeeeeeeef7777777777777777777777feeeeeeeeeef77f777777777777ffeeeeeeeeeeeeeefeff77777feeeef7777777feeeeee
            effeeeeeeeffeeeeeef555ffeff77777777feeeeeeef77777777fffeeeeeeeeeff7777777777777777777777feeeeeeeeeef77f777777777777feeeeeeeeeeeeeeefeff777777feeef777777ffeeeeee
            eefeeeeeeeefeeeeeef5555feeef7777777feeeeeeef77777777fefeeeeeeeeeeff777777777777777777777fffeeeeeeeef7f777777777777ffeeeeeeeeeeeeeffffffff7777feeef77777fffeeeeee
            eefeeeeeeeffeeeeeeff5555eeef7777777feeeeeeef7777777feefeeeeeeeeeefff7777fff7777777777777fffeeeeeeeef7f777777777e7ffeeeeeeeeeeeeff999ff9ff7777feeef777ffffeeeeeee
            eefeeeeeeefeeeeeeeff5555feeefff7777feeeeeeeffffffffeeffeeeeeeeeef7f777777fff77777777777fffeeeeeeeeefff77777feeeeef7eeeeeeeeeeff9999f999ff7777feeeefffeeefeeeeeee
            eeefeeeeeefeeeeeeef555555feeeefff7fefeeeeefeeeeeeeeeefeeeeeeeeeef7ff77777feff7777ff777777feeeeeeeeffff77777ffeeeeffefeeeeeeff99999ff99999f777feeeefeeeeefeeeeeee
            eeefeeeeeefeeeeeeeff555555feeefeefeefeeeeeefeeeeeeeeefeeeeeeeeeefff777777feeef77fef77777feeeeeeeeeefeeff7777fffeeffeeeeefff99999fff999999fff77feeeefeeeefeeeeeee
            eeeefeeeeefeeeeeeefff55555ffeeeeeeeefeeeeeefeeeeeeeeefeeeeeeeeeefeef77777feeefffeef77777ffeeeeeeeeefeeeefff777feeffeeeff9999999f99f999999ffffffeeeefeeeefeeeeeee
            eeeefeeeeefeeeeeeeeef22222fffeeeeeeefeeeeeefeeeeeeeeefeeeeeeeeeefeefff77ffeeeeeeeef777ffffeeeeeeeeefeeeeeeff77feeffeff9999999ff999f999999ffeeefeeefeeeeefeeeeeee
            eeeefeeeefeeeeeeeeefff222555feeeeeeefeeeeeefeeeeeeeeefeeeeeeeeeefeeeeeffffeeeeeeeef77fffffeeeeeeeeefeeeeeeeff7feeeff99999999f99999f999999feeefeeeefeeeeefeeeeeee
            eeeeffeeefeeeeeeeff222222222ffeeeeeefeeeeeefeeeeeeeeefeeeeeeeeeefeeeeeefffffeeeeeeffffeeefeeeeeeeeefeeeeeeeefffeeff99999999ff99999f99999ffeeefeeeefeeeeefeeeeeee
            eeeeeffeefeeeeeff222222222222feeeeeefeeeeefeeeeeeeeeefeeeeeeeeeefeeefff55555feeeeefeeeeeefeeeeeeeeefeeeeeeeeeefefff9999999f9999999f9999fbfeeeefeeefeeeeefeeeeeee
            eeeeeefeefeeeef22222222222222feeeeeefeeeeefeeeeeeeeeefeeeeeeeeeefeef555555555feeeefeeeeeefeeeeeeeeefeeeeeeeeeeff9fffffff9f99999999f999fbbfeeeeefeefeeeeefeeeeeee
            eeeeeefeefeefff2bbffbbff22ffffeeeeeefeeeeefeeeeeeeeeeefeeeeeeeeefeef555555555feeeeefeeeeefeeeeeeeeefeeeeeeeeeff99f999999ff99999999f99fbbbfeeeeefeefeeeeefeeeeeee
            eeeeeffeeeffbbbbbbfffbbbbbbbbffffeefeeeeeefeeeeeeeeeeefeeeeeeeeefeef555555555feeeeefeeeefeeeeeeeeeefeeeeeeefff999f9999ff99ff999999f9fbbbbfeeeefeeefeeeeefeeeeeee
            eeeeeefeefeefbbbbbbbffbbbbbbbbffbffeeeeeeefeeeeeeeeeeefeeeeeeeeefeef5555555555feeeefeeeefeeeeeeeeeefeeeeeff99ff99f999f999999ff9999ffbbbbbfeeeefeeefeeeeefeeeeeee
            eeeeeefeefeeefbbbbbbbfffbbbbbbbbbbfeeeeeeefeeeeeeeeeeefeeeeeeeeefeeef555555555feeeefeeeefeeeeeeeeeefeeeef99999f99f99f999999999fffffbbbbbbfeeefefeefeeeeefeeeeeee
            eeeeeefeefeeeefbbbbbbbbffbbbbbbbbbffeeeeeefeeeeeeeeeeefeeeeeeeeefeeef555555555feeeefeeeefeeeeeeeeeefeeef999999f999ff9999999999999fbbbbbbfeeefff5fefeeeeefeeeeeee
            eeeeeefeefeeeefbbbbbbbbbbfbbbbbbbbbbffeeefeeeeeeeeeeeefeeeeeeeeefeeeef55555555feeeeefeeefeeeeeeeeeefeef999999f9999ff99999999999ffbbbbbbbfeefeef5fefeeeefeeeeeeee
            eeeeeefefeeeeeefbbbbbbbbbbfbbbbbbbbbbfeeefeeeeeeeeeeefeeeeeeeeeefeeeef555555555feeeefeeefeeeeeeeeeefff9999999f999ff9999999999ffbbbbbbbbbfeefef555ffeeeefeeeeeeee
            eeeeeefefeeeeeeefbbbbbbbbbfffbbbbbbbbbfeeefeeeeeeeeeefeeeeeeeeeefeeeef555555555feeeefeeefeeeeeeeeeeff99999999f99f9f99999999ffbbbbbbbbbbffeefef55feefeeefeeeeeeee
            eeeeeffeefeeeeeeefbbbbbbbbbbffffbbbbbbbfeefeeeeeeeeeefeeeeeeeeeefeeef55522555555feefeeefeeeeeeeeeffff9999999f99ff9f9999999fbbbbbbbbbbfffeeeff555feefeefeeeeeeeee
            eeeeeefeefeeeeeeefbbbbbbbbbbbbfbffbbbbbbffeeeeeeeeeeefeeeeeeeeeefeef5552222255555fffeeefeeeeeeeefbbbbff999999ff999f999ffffbbbbbbbbbbfbbfeeeff555feefeefeeeeeeeee
            eeeeeefeefeeeeeeeefbbbbbbbbbbbffbbfbbbbbbfeeeeeeeeeeefeeeeeeeeeefef5555222222555ffeeeeefeeeeeeffbbbbbbbfffffffffffffffbbbbbbbbbbbbbbfbfeeeeff5555ffeefeeeeeeeeee
            eeeeeefeefeeeeeeeeefbbbbbbbbbbbbffbffbbbbffeeeeeeeeeefeeeeeeeeeefef5555222225555ffeeeeeefeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbfeeeeef55255ffeefeeeeeeeeee
            eeeeeefefeeeeeeeeeeefbbbbbbbbbbbbbfbbffbbbbffeeeeeeeefeeeeeeeeeeff55555222225555feeeeeeefeeeffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbfeeeeef552555feefeeeeeeeeee
            eeeeeefefeeeeeeeeeeeefbbbbbbbbbbbbbffbbbbbbbbfeeeeeefeeeeeeeeeeefff555222222525ffeeeeeeefeefffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbfbfeeeef555225ffeefeeeeeeeeee
            eeeeeefefeeeeeeeeeeeeeffbbbbbbbbbbbbbffbbbbbbfeeeeeefeeeeeeeeeeefeef55222222222ff2eeeeeefeeffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbffeeeeef522222ffeeefeeeeeeeee
            eeeeeefefeeeeeeeeeeeefffbbbbbbbbbbbbbbbbbbbbbbffeeeefeeeeeeeeeeeffeef2222222222f2eeeeeefeeffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbfeeeeeeff222255ffeefeeeeeeeee
            fffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffbffffffffffffffffffffff22222222ff2fffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbffffffffff222222ffffffffffffff
            77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777f2222222222ff7777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbf7777777f22222222f777777777777
            77777777777777777777777fbbbbbbbbbbbbbbbbbbfbbbbbbf777777777777777777f2222222222ff777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbf777777f22222222f7777777777777
            777777777777777777777777fbbbbbbbbbbbbbbbbbbfffbbbff77777777777777777f22222222222f77777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbff7777777f222222222f777777777777
            777777777777777777777777fbbbbbbbbbbbbbbbbbbbbfbbbbbf777777777777777f22222222222f77777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbf77777777f22222ff222f777777777777
            777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbffbbbbfff7777777777ff2ff222222222f7777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffbbbf777777fff2222fff7fffff77777777777
            777777777777777777777777fffbbbbbbbbbbbbbffffffffffffffbffffffffffffffbbb22222222f77fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbf777777ffffffffbbffffffff777777777
            77777777777777777777777777fffbbbffffffff777777777fffbbbffffbbbbbbbbbbbff222222ffffffbbbbbbffffffbbbbbbbbbbbbbbbbbbbffbbbbbbbbf7777777ffffbbbbbbbbbbbbbf777777777
            7777777777777777777777777777fffff7777777777777777fffffbbbbbbbbbbbbbbbbbbbbbbbbbfbfffffffff777777fffffbbbbbbbbbbbbbfbbbbbbbbbf777777777fffffbbbbbbbbbbbbff7777777
            77777777777777777777777777777777777777777777777777fffffbbbbbbffbfbbbbbbbfbbbbbbffff777777777777777777fffffbbbbbbfffbbbbbbbbf777777777fbbbbbffbbbbbbbbbbbbf777777
            77777777777777777777777777777777777777777777777777777ffffbbbbbbbbbbbbbbbbbbbbbbbfff77777777777777777777777ffffbbbbfbbbbbbff77777777777fbbbbbbffbbbbbbbbbbf777777
            77777777777777777777777777777777777777777777777777777777fffbbbbbbbbbbbbffffffffffff7777777777777777777777777fffffffffbbbff7777777777777fffffffbbbbbbffbbf7777777
            77777777777777777777777777777777777777777777777777777777777fffffffffffffbbbffbbbff77777777777777777777777777777777777fffffffff7777777777777777fbbffffffff7777777
            7777777777777777777777777777777777777777777777777777777777777777777777fffff77fff777777777777777777777777777777777777777777777777777777777777777ff777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
        rowa.entity.setPosition(9, 96)
        if (level == 9)
        {
            game.showLongText("Boss I", DialogLayout.Bottom)
        }
    }
    else if (level >= 10 && level <= 19)
    {
        // tile
        tiles.setTilemap(tilemap`level_1`)
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
            f7777ff7f777777777777777777777777777ff77777f777ff7777ffeeeeef7777777ff77777777f77777777777777777777777ff7777f77777777f777777777777777777777777777777777777777777
            f777f777f77777777777777777777777777fff7777f777fff77ff77feeeef77777ff7f7777777ff777777777777777777777fff7777ff77777777f777777777777777777777777f7777777f777777777
            f7ff7777f777777777777f777777777777ff77f77f7777f7fff77ffeeeef7777ffeef7777777ff77777777f77777777777fff7f7777f77777777f7777777777ff777f77777777ff777777f7777777777
            7f777777f77777777777f777777777777ff7777ff77fffff77777feeeeefffffeeeef777777ff77777777ff777777777ffffff7777ff7777777ff777777777f7777ff77777777f7f777ff7fff7777777
            7777777f77777777777ffff77777777ff77ffff7fff7777777777feeeeeeeeeeeeef777777fff7777777f7f77777777ff7ff77777ff7777777f7f77777777ff777f7f7777777ffff77ff7feef7777777
            77777777f77777777ffeeeefff77fff7777777777777777777777feeeeeeeeeeeeef7777ff77f777777f777f777777ffff7f7777fef7777777fff7777777ff777ff7f777777f7ffffff7feef77777777
            777777777f77777ffeeeeeeeefff7777777777777777777777777feeeeeeeeeeeeef77ff777f77777fff7777fffffff7777fffffeeef7777fff77f7777fff777f77f777777f77feeeefffeef77777777
            7777777777fffffeeeeeeeeef77777777777777777777777777777feeeeeeeeeeeeeff777777f7fff777777777777777777777feeeeeffffeef777ffff77f77f777f77777f777feeeeeeeeef7777777f
            77777777777feeeeeeeeeeeef77777777777777777777777777777feeeeeeeeeeeeef77777777f777777777777777777777777feeeeeeeeeeef7777777777ff77777fffff777feeeeeeeeeef77777ff7
            777777777777feeeeeeeeeeef777777777777777777777777777777feeeeeeeeeeef777777777777777777777777777777777feeeeeeeeeeeef7777777777777777777777777fefeeeeeeeeffffff777
            777777777777feeeeeeeeeeef777777777777777777777777777777feeeeeeeeeeef777777777777777777777777777777777feeeeeeeeeeeef777777777777777777777777feefeeeeeeeef77777777
            7777777777777feeeeeeeeeeef777777777777777777777777777777feeeeeeeeeef77777777777777777777777777777777feeeeeeeeeeeeef777777777777777777777777feefeeeeeeeef77777777
            7777777777777feeeeeeeeeeef7777777777777777777777777777777feeeeeeeeef77777777777777777777777777777777feeeeeeeeeeeeeff77777777777777777777777feefeeeeeeeef77777777
            7777777777777feeeeeeeeeeeeff77777777777777777777777777777feeeeeeeeef7777777777777777777777777777777feeeeeeeeeeeeeeeef7777777777777777777777feefeeeeeeeef77777777
            7777777777777feeeeeeeeeeeeef777777777777777777777777777777feeefeeeef7777777777777777777777777777777feeeeeeeeeeeeeeeef7777777777777777777777feeeefeeeeeef77777777
            77777777777777feeeeeeeeeeeef777777777777777777777777777777feeeefeeeeff77777777777777777777777777777feeeeeeeeeeeeeeeeef777777777777777777777feeefeeeeeeef77777777
            77777777777777feeeeeeeeeeeeef777777777777777777777777777777feeeefeeeeef7777777777777777777777777777feeeeeeeeeeeeeeeeef777777777777777777777feeefffeeeeef77777777
            77777777777777feeeeeeeeeeeeef777777777777777777777777777777feeeefeeeeef777777777777777777777777777feeeeeeeeeeeeeeeeef7777777777777777777777feeeeeefeeef777777777
            77777777777777feeeeeeeeeeeeef777777777777777777777777777777feeeefeeeeeef77777777777777777777777777feeeeeeeeeeeeeeeeef7777777777777777777777feeeeeefeeef777777777
            77777777777777feeeeeeeeeeeeef777777777777777777777777777777feeeefeeeeeeef777777777777777777777777feeeeeeeeeeeeeeeeef777777777777777777777777feeeeeeeeef777777777
            77777777777777feeffeeeeeeeeef777777777777777777777777777777feeeeefeeeeeeeff7777777777777777777777feeeeeeeeefeeeeeeef777777777777777777777777feeeeeeeeef777777777
            77f77777777777feeefeeeeeeeeef777f77777777777777777777777777feeeeefeeeeeeeeeff77777777777777777777feeeeeeeffeeeeeeef77777777777777777777777777feeeeeeeef777777777
            7ff77777777777feeeefeeeeeeeef77f777777777777777777777777777feeeefeeeeeeeeeeeef777777777777777777fffeeeeefeeeeeeeeef77777777777777777777777777feeeeeeeef777777777
            ff777777777777feeeefeeeeeeeef7f7777ff777777777777f777777777ffeeefeeeeeeeeeeeeff777ff7777777777fffeeeeeeefeeeeeeeeef777777777777777777777777777feeeeeeef777777777
            ff77777777f7fffeeeefeeeeeeeef7f77ff9f77777777777f77777777fffeeeeefeeeeeeeeeeeff7fff77777777777fffeeeeeeefeeeeeeeef7777777777777777f77777777ff7feeeeeeeef77777777
            7ffff77fffff7feeeeefeeeeeeeeff9fffff77fff77ff7ff77777f7fffeeeeeeeefeeeeeeeeeef9f77f7777f7f77ff7feeeeeeeefeeeeeeeef7777777777ffff7ff777f777ff77fffeeeeeef77777f77
            77f99fff9fff7feeeeefeeeeeeeef7ff9f99fff777fffffffffffff77feeeeeeeefeeeeeeeeeeff777f77fffffff777feeeeeeefeeeeeeeef777777ff7ffffffff77ffffff7fffffeeeeeeef7777ff77
            77f9fffffff77feeeefeeeeeeeef77ffffff9f77ffeeeff777777777feeeeeeeeefeeeeeeeeeef77777fffffeeef7777feeeeeefeeeeeeeff7ffffff7777ffef77777ff7777777feeefeeefffffffdff
            777f777777777feeeefeeeeeeeef77777feeffffeeeeef7777777777feeeeeeeeeefeeeeeeeeef777777feeeeff77777feeeeeeefeeeeeeeff7777f777ffeeefffffff77777777feeefeeeef7777ff7f
            7777777777777feeeefeeeeeeeef77777feeeeeeeeeeff777777777feeeeeeeeeeefeeeeeeeef77777ffeeeef77777777feeeeeefeeeeeef7777777fff77feeeeeeeef7777777feeefeeeeef77777777
            777777777777feeeeefeeeeeeeef77777ffefeeeeeeef7777777777feeeeeeeeeefeeeeeeeef777777feeeeef777777777feeeeeefeeeeef777777777777feeeeeeeef777777feeeefeeeef777777777
            777777777777feeeeefeeeeeeeff777777fefeeeeeeef777777777feeeeeeeeeeefeeeeeeeef77777feeeeeef7777777777feeeeefeeeeef777777777777feeeeeeef777777feeeeefeeeef777777777
            777777777777feeeeefeeeeeeef77777777ffeeeeeeef777777777feeeeeeeeeefeeeeeeeef777777feeeeeef77777777777feeeefeeeeef77777777777ffeeeeeeef777777feeeefeeeeef777777777
            77777777777feeeeeefeeeeeeef77777777fefeeeeeef777777777feeeeeeeeeefeeeeeeef777777feeeeeeef77777777777feeefeeeeeef77777777777feeeeeeeef77777ffeeeefeeeef7777777777
            77777777777feeeeeefeeeeeeef77777777feefeeeeef777777777feeeeeeeeefeeeeeeef7777777feeeeeeef77777777777feeefeeeeeef77777777777feeeeeeef777777feeeeefeeeef7777777777
            77777777777feeeeeefeeeeeeef77777777ffeeeeeeef777777777feeeeeeeefeeeeeeeef7777777feeeeeef777777777777feefeeeeeeeef777777777ffeeeeeeef77777ffeeeefeeeeef7777777777
            7f77777777feeeeeefeeeeeeeef777777777feeeeeeef77777777feeeeeeeefeeeeeeeef77777777feefeeef77777777777feeefeeeeeeeef777777777ffeeeeeeef77777feeeefeeeeeef7777777777
            fffff77777feeeeeefeeeeeeeef777777777feeeeffef77777777feeeeeeeefeeeeeeeef77777777feefeeef77777777777feeefeeeeeeeef777777777feffeeeeef77777feeefeeeeeeef7777777777
            eeeefff777feeeeefeeeeeeeeef777777777feeeefeef77777777feeeeeeefeeeeeeeef777777777feefeeef77777777777feefeeeeeeeeef77777777feeeefeeeef77777feeefeeeeeeef7777777777
            eeeeeefffffeeeeefeeeeeeeef7777777777feeeefeef77777777feeeeeefeeeeeeeeef777777777feeefeef77777777777feeeeeeeeeeeef77777777ffeeefeeeef77777feeefeeeeeeef7777777777
            eeeeeef999feeeeefeeeeeeeef777777777ffeeeefeef77777777feeeeeefeeeeeeeef7777777777feeeefef7777777777feeeeeeeeeeeeeff7777fffeeeeefeeeef7777ffeeefeeeeeef77777777777
            eeeeef999feeeeeeefeeeeeeeff77777777ffeeeefeef77777777feeeeeeefeeeeeefeffff777777feeeeeff777777777ffeeeeeeeeeeeeeffffffeffeeeeeefeeffffffefeeefeeeeeefff77777777f
            eeeeef999feeeeeeefeeeeeeefff777ffffefeeeeefeff7777777fffeeeeeefeeeeefeeeeefffff7feeeeefffffffffffeeeeeeeeeeeeeefeeeeeeefeeeeeeefeefeeeeeefeeeeeeeeeefeefffffffff
            eeeeef999feeeeeeefeeeeeeeefefffeeeeefeeeeefeff77777777feeeeeeefeeeeefeeeeeeeeef7fffeeeffeeeeeeeefeeeeeeeeeeeeeefeeeeeeefeeeeeeefeefeeeeeefeeeeeeeeeefeeeeeeeeeee
            eeeeef999feeeeeefeeeeeeeeefeeeeeeeeefeeeeefeff777777fffeeeeeefeeeeefeeeeeeeeeeeffeeeeffeeeeeeeeefeeeeeeeeeeeeefeeeeeeeefeeeeeefeeefeeeeeefeeeefeeeeefeeeeeeeeeee
            eeeeef999feeeeeeefeeeeeeeefeeeeeeeeefeeeeefefef777ffeefeeeeeefeeeeefeeeeeeeeeeeefeeeeffeeeeeeeefeeeeeeeeeeeeeefeeeeeeeefeeeeeefeeefeeeeeefeeeefeeeeefeeeeeeeeeee
            eeeeef99feeeeeeeefeeeeeeeefeeeeeeeefeeeeeeffeeefffeeeefeeeeefeeeeeefeeeeeeeeeeeefeeeeffeeeeeeeefeeeeeeeeeeeeeefeeeeeeeefeeeeeefeeefeeeeeefeeeeeeeeeefeeeeeeeeeee
            eeeeef99feeeeeeeeefeeeeeeeffeeeeeeefeeeeefefeeeeeeeeeefeeeeefeeeeeefeeeeeeeeeeeefeeefefeeefeeeefeeeefeeeeeeeeffeeeeeeeefeeeeeeeeeeffeeeeefeeeeeefeeeffeeeeeeeeee
            eeeeeef9feeeeeeeeefeeefeeeefeeeeeeefeeeeefffeeeeeeeeeeefeeeefeeeeefeeeeeeeeeeeeefeeeeffeeefeeefeeeeefeeeeeeeefeeeeeeeeefeeeeeeeeeeefeeeeeffeeeeefeeeefeeeeeeeeee
            eeeeeef9feeeeeeeeefeeefeeeefeeeeeeffeeeeeffeeeeeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeefeeeeefeefeeeefeeeeeeeeeeeeefeeeeeeeeeeefeeeeeeeeeefeeeeeffeeeeefeeeefeeeeeeeeee
            eeeeeeeffeeeeeeeefeeeeefeeefeeefeefeeeeeeffeeeeeeeeeeeefeeeeeeeeeefeeeefeeeeeeefeeeeeefeefeeefeeeeeeeeeeeeeefeeeeefeeeeefeeeeeeeeefeeeeeefefeeefeeeeefefeeeeeeee
            eeeeeeef9feeeeeefeeeeefeeeefeeefeefeeeeeeffeeeeeeeeeeefeeeeeeeeeeefeeeefeeeeeeefeeeeeefeeefeefeeeeeeeeeeeeeefeeeefeeeeeefeeeeeeeeefeeeeeefefeeefeeeeeffeeeeeeeee
            eeeeeef99feeeeefeeeeeefeeeefeefeeefeeeeeeffeeeeeeeeeeefeeeeeeeeeeefeeeeffeeeeeefeeeeeefeeefeefeeeeeeeeeeeeefeeeefeeeeeeefeeeeeeeeefeeeeeefefeeeeeeeeefefeeeeeeee
            eeeeeef99feeeeefeeeeeefeeeefeefeeefeeeeeeffeeeeeeeeeeefeeeeeeeeeeefeeeeefeeeeeefeeeeeefeefeeefeeeeeeeeeeeeefeeeefeeeeeeefeeeeeeeeefeeeeeefefeeeeeeeeefeefeeeeeee
            eeeeeef99feeeeefeeeeeefeeeefeefeeefeeeeefefeeeeeeeeeefeeeeeeeeeeeefeeeeefeeeeeefeeeeeefeefeeefeeeeeeeeeeeeefeeeeefeeeeeefeeeeeeeeefeeeeeeffeeeeeeeeeefeeefeeeeee
            eeeeeef99feeeefeeeeeefeeeeefeeefeefeeeefeefeeeeeeeeeefeeeeeeeeeeeefeeeefeeeeeefeeeeeeefeefeeefeeeeeeeeeeeeefeeeeefeeeeeefeeeeeeeeefeeeeeeffeeeeeeeeefeeeefeeeeee
            eeeeeef99feeeefeeeeeefeeeeefeeefefeeeeefeeffeeeeeeeeefeeeeeeeeeeeefeeeefeeeeeefeeeeeeefeefeeeffeeeeeeeeeeeefeeeeeefeeeeeefeeeeeeeefeeeeefffeeeeeeeeefeeefeeeeeee
            eeeeeef99feeeefeeeeeefeeeeefeeefefeeeeefeeefeeeeeeeefeeeeeeeeeeeeefeeeefeeeeefeeeeeeeefeeefeeefeeeeeeeeeeeefeeeeeefeeeeeeffeeeeeeefeeeeefeefeeeeeeeeefeefeeeeeee
            eeeeeef99feeeefeeeeeefeeeeefeeffefeeeeeefeefeeeeeeeefeeeeeeeeeeeeefeeefeeeeefeeeeeeeeeefeeeeeefeeeeeeeeeeeefeeeeeeeffeeeeefeeeeeeefeeeefeeeeeeeeeeeeefeefeeeeeee
            eeeeef999feeefeeeeeeeefeeeefeeffefeeeeeefeeffeeeeeefeeeefeeeeeeeeefeeefeeeeefeeeeeefeeeffeeeeefeeeeeeefeeeefeeeeeeeeeeeeeefeeeeeeefeeeffeeeeeeeeeeeeffeeefeeeeee
            eeeeef99ffeefeeeeeeeeefeeeefeefeefeeeeefeeeefeeeeeefeeeefeeeeeeeeefeefeeeeeffeeeeeeefeeefeeeeefeeeeeeeefeeefeeeeeeeeeeeeeeefefffeefeefeeeeeeeeeeeeeefeeeefeeeeee
            eeeeef99feeefeeeeeeeeefeeeefeefeefeeeeefeeeefeeeeeffeeeefeeeeeeeeefeeffeeeefeeeeeeeefeeefeeeeeefeeeeeeeeeeeffeeeeeeeeeeeeeefeeeeeefeefeeeefeeeeeeeeefeeefeeeeeee
            eeeeef99feeefeeeeeeeefeeeefeeefeefeeeefeeeeefeeeeefeeeefeeeeeeeeeefeeeeeeefeeeeeeeefeeeefeeeeefeeeeeeeeeeeeefeeeeeeeeeeeeeefeeeeeefeefeeeefeeeeeeeeffeeeeeeeeeee
            eeeeef99feeefeeeeeeeefeeeefeeefeefeeeeefeeeefeeeeefeeeefeeeeeeeeeffeeeeeeefeeeeeeeefeeeefeeeeefeeeeeeeeeeeeefeeeeeeeeeeeeeefeeeeeefefeeeeeeeeeeeeeefeeeeeeeeeeee
            eeeeef99feefeeeeeeeefeeeefeeeefeeffeeeefeeeefeeeeefeeeeefeeeeeeeefeeeeeeeefeeeeeeeefeeeefeeeefeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeefefeeeeeeeeeeeeefeeeeeeeeeeeee
            eeeeef9feeeefeeeeeeefeeeefeeeeeeeefeeeefeeeefeeeeeefeeeefeeeeeeefeeeeeeeeefeeeeeeefeeeeefeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeefefeeeeeeeeeeeeefeeeeeeeeeeeee
            eeeeef9feeeeeeeeeeeeefeefeeeeeeeeeefeefeeeeefeeeeeeffeeeefeeeeefeeeeeeeeeefeeeeeeefeeeefeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeefefeefeeefeeeeeeeefeeeeeeeeeeeee
            eeeeef9feeeeeeeeeeeeeeeefeeeeeeeeeefeefeeeeefeeeeefffeeffeeeeeefeeeeeeeeeefeeeeeeefeeeefeeefeeeeeeeeeeeeeeeeefeeeeefeeeeeefeeeeefefeefeeefeeeeeeeefeeeeeeeeeeeee
            eeeef9feeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeefeeeeeefffeffeeeeeefeeeeeeeeeeefeeeeeeefeeeffeeefeeeeeeeeeeefeeeeefeeeeefeeeeefeeeeeefefeefeeefeeeeeeeefeeeeeeeeeeeee
            eeeef9feeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeefeeeeeeeffeffeeeeeefeeeeeeeeeeefeeeeeeefeeefeeefeeeeeeeeeeeefeeeeeefeeeeeffeeefeeeeefeefeefeeefeeeeeeeefeeeeeefeeeeee
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
            efeeeeeeeeeeeeeeefeeeeefeeeefeeeeefeeeeeeeeeeefeeeeffeeeeeeeeeeefeeeeeeeefeeeeeeeeeeffeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeefeeeeeeeeeefeeeeeffeeeeeeeeeeeefeeeeeeeee
            efeeeeeeeeeeeeeeefeeeeefeeefeeeeeffeeeeeeeeeeefeeeefeeeeeeeeeeeefeeeeeeeffeeeeeeeeeefeeeeeefeeeeeeeeeeeeeeeeeeffeeeeeeffeeeeeeeeeefeeeeefeeeeeeeeeeeeefeeeeeeeee
            efeeeeeeeeeeeeeefeeeeeefeeeeeeeeefeeeeeeeeeeeeffeeefeeeeeeeeeeeefeeeeeeefeeeeeeeeeeefeeeeeeffeeeeeeeeeeeeeeeeeffeeeeeefeeeeeeeeeeefeeeeffeeeeeeeeeeeeefeeeeeeeee
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            7777777777777777f77777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777777777777777
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
        `)
        rowa.entity.setPosition(9, 96)
        if (level == 19)
        {
            game.showLongText("Boss II", DialogLayout.Bottom)
        }
    }
    else if (level >= 20 && level <= 29)
    {
        // tile
        tiles.setTilemap(tilemap`level_2`)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111
            999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111119999999999999999999fffffff999999999999999999999999999999991111111111
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111119999999999999999ff5555555ff9999999999999999999999999999911111111111
            999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111199999999999999f55555555555f999999999999999999111111199111111111111
            999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111119999999999999f54455555555f999999999999999911111111111111111111111
            99999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111199999999999f5445555555555f99999999999999111111111111111111111111
            99999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111199999999999f5455555555555f99999999999999111111111111111111111111
            99999999999999999999999999999911111119999999999999999999999999999999999999999991111111111111111199999999999f5455555555555f99999999999991111111111111111111111111
            99999999999999991111111119991111111111199999999999999999999999999999999999999991111111111111111199999999999f5455555555555f99999999999991111111111111111111111111
            99999999999999911111111111911111111111119999999999999999999999999999999999999991111111111111111199999999999f5445555555555f99999999999991111111111111111111111111
            99999999999999111111111111111111111111119999999999999999999999999999999999999991111111111111111199999999999f5545555555555f99999999999991111111111111111111111111
            99999999999991111111111111111111111111111999999999999999999999999999999999999991111111111111111199999999999f5544555555555f99999999999991111111111111111111111111
            999999999999111111111111111111111111111119999999999999999999999999999999999999911111111111111111111111111999f55545555555f999999999999991111111111111111111111111
            999999999999111111111111111111111111111119111111111999999999999999999999999999111111111111111111111111111119f55554455555f999999999999991111111111111111111111111
            9999999999991111111111111111111111111111111111111111199999999999999999999999111111111111111111111111111111119ff5554555ff9999999999999999111111111111199111111111
            999999999999111111111111111111111111111111111111111111999999999999999999999111111111111111111111111111111111199fffffff999999999999999999111111111111199911111111
            9999999999991111111111111111111111111111111111111111111999999999999999999911111111111111111111111111111111111199999999999999999999999999911111111111999999999999
            9999999999991111111111111111111111111111111111111111111999999999999999999911111111111111111111111111111111111199999999999999999999999999999111111199999999999999
            9999999999991111111111111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999991111111111111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999991111111111111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999999111111111111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999999911111111111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999999991111111111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999999999111111111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999999999999991111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999999999999991111111111111111111111111111111111199999999999999999111111111111111111111111111111111111119999999999999999999999999999999999999999999999999
            9999999999999999999991111111111111111111111111111111111999999999999999999911111111111111111111111111111111111199999999999999999999999999999999999999999999999999
            9999999999999999999991111111111111111111111111111111111999999999999999999911111111111111111111111111111111111199999999999999999999999999999999999999999999999999
            9999999999999999999991111111111111111191111111111111119999999999999999999991111111111111119911111111111111111999999999999999999999999999999999999999999999999999
            9999999999999999999999111111111111111999111111111111199999999999999999999999111111111111199991111111111111119999999999999999999999999999999999999999999999999999
            9999999999999999999999911111111111119999991111111119999999999999999999999999991111111119999999111111111111199999999999999999999999999999999999999999999999999999
            9999999999999999999999991111111111199999999999999999999999999999999999999999999999999999999999991111111119999999999999999999999999999999999999999999999999999999
            9999999999999999999999999111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999fffffffffffffffff9999999999999999999999999999999999999999999999999fffffffffff9999999999999999999999999999999999999999ffffffffffffff999999
            999999999999999999fffff77777777777777777fff99999999999999999999999999999999999999999fffff7777777777ffffff9999999999999999999999999999999ffff77777777777777ffff99
            99999999999999ffff7777777777777777777777777fff999999999999999999999999999999999fffff777777777777777777777fffff999999999999999999999999ff7777777777777777777777ff
            999999999999ff77777777777777777777777777777777fff9999999999999999999999999999ff7777777777777777777777777777777fff999999999999999999fff77777777777777777777777777
            9999999999ff7777777777777777777777777777777777777f999999999999999999999999fff777777777777777777777777777777777777fff9999999999999ff77777777777777777777777777777
            9999999fff7777777777777777777777777777777777777777ff99999999999999999999ff777777777777777777777777777777777777777777ff999999999ff7777777777777777777777777777777
            999999f777777777777777777777777777777777777777777777f999999999999999999f7777777777777777777777777777777777777777777777ff99999ff777777777777777777777777777777777
            9999ff77777777777777777777777777777777777777777777777fff9999999999999ff7777777777777777777777777777777777fff777777777777f99ff77777777777777777777777777777777777
            999ff777777777777777777777777777777777777777777777777777f9999999999ff777777777777777777777777777777777777fff7777777777777ff777777777777777777777777777777fff7777
            999f77777777777777777777777777777777777777777777777777777f99999999ff7777777777777777777777777777777777777fff777777777777ffff77777777777777777777777777777fff7777
            99f77777777777777777777777777777fff77777777777777777777777f999999f77777777777777777777777777777777777777777777777777777f777777777777777777777777777777777fff7777
            9ff77777777777777777777777777777fff777777777777777777777777f9999f777777777777777777777777777777777777777777777777777fff77777777777777777777777777777777777777777
            ff777777777777777777777777777777fff7777777777777777777777777f99f777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777
            f777777777777777777777777777777777777777777777777777777777777ff77777777777777777777777777777777777777777777777777ff777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777ff777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777ff777777777777777fff77777777777777777777f7777777777777777fff777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777ff77777777777777fff7777777777777777777f77777777777777777fff777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777fff777777f77777777777777fff7777777777777777777f77777777777777777fff777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777fff7777777f7777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777fff7777777ff77777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777ff777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777777f777777777777777777777777777777777777777777777777777777777
            777777777fff7777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777ff777777777777777777777777777777777777777777777777777777777
            777777777fff77777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777f7777777777777777777777777777777777777777777777777777777777
            777777777fff77777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777f7777777777777777777777777777777777777fff7777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777f7777777777777777777777777777777777777fff7777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777f7777777777777777777777777777777777777fff7777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777f777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777f777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777f777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777ff77777777777777777777f7777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777f7777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777f7777777777777777777ff7777777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777f77777777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777f77777777777777777777777777777777777777777777777777777777777777
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
        rowa.entity.setPosition(9, 96)
        if (level == 29)
        {
            game.showLongText("Boss III", DialogLayout.Bottom)
        }
    }
    else if (level >= 30 && level <= 39)
    {
        // tile
        tiles.setTilemap(tilemap`level_3`)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999ffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9f9fffffff777777777ffffff999999999999999999999ffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            fff7777777777777777777777f99999999ff99999fffff777777ffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffff999999999
            7777777777777777777777777f9999999f77fffff77777777777777fffff99999999999999999999999999999999999999999999999999999999999999999999999999999999f777777777ff99999999
            77777777777777777777777777ff9999f77777777777777777777777777f999999999999999999999999fff9999999ffffffffffffffffff999999999999999999999999999f777777777777f9999999
            7777777777777777777777777777f9ff7777777777777777777777777777fff999999999999999999fff777fffffff77777777777777777ffff99999999999999999999ffff77777777777777ffff999
            7777777777777777777777777777ff777777777777777777777777777777777fffff9999999999fff7777777777777777777777777777777777ff99999999ffffffffff777777777777777777777ff99
            7777777777777777777777777777ff77777777777777777777777777777777777777fff999999f777777777777777777777777777777777777777f999ffff777777777777777777777777777777777ff
            77777777777777777777777777777f77777777777777777777777777777777777777777f9999f77777777777777777777777777777777777777777ffff77777777777777777777777777777777777777
            777777777777777777777777777777f7777777777777777777777777777777777777777f999f77777777777777777777777777777777777777777777ff77777777777777777777777777777777777777
            777777777777777777777777777777f77777777777777777777777777777777777777777f9f77777777777777777777777777777777777777777777777f7777777777777777777777777777777777777
            777777777777777777777777777777f77777777777777777777777777777777777777777fff7777777777777777777777777777777777777777777777f77777777777777777777777777777777777777
            777777777777777777777777777777f777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777
            777777777777777777777777777777f777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777
            777777777777777777777777777777f777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777
            7777777777777777777777777777777f77777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777f77777777777777777777777777777777777777
            7777777777777777777777777777777f77777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777f77777777777777777777777777777777777777
            777777777777777777777777777777f7777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777f77777777777777777777777777777777777777
            777777777777777777777777777777f77777777777777777777777777777777777ff777777f7777777777777777777777777777777777777777777777f77777777777777777777777777777777777777
            777777777777ff7777777777777777f77777777ff77777777777777777777777ff9f77777f7777777777777777777777777777777777f77777777777f777777777777777777777777777777777777777
            777777777fffeeff7777777777777f777777777fff77777777777777777777ffeff77777f777777777777777777777777777777777ffff777777777f7777777f7777777777777777777777fffffffff7
            77777777ffeeef777777777777777f777777777feef77777777777777777fffeef777777f7777777777777777777777777777777ffeeeef7777777f7777777fef777777777777777ffffffeeeeeeeef7
            7777777ffeeef777777777777777f77777777777feef777777777777777ffeeeef7777777f777777777777777777777777777fffeeeeeef777777f7777777feeeff77777777777ffeeeeeeeeeeeeeeff
            777777feeeef77777777777777ff777777777777feef7777777777777ffeeeeef77777777f77777777777777777777777777feeeeeeeeeff7777f77777777feeeeef7777777fffeeeeeeeeeeeeefff77
            777fffeeeeef77777777777777f7777777777777feef777777777777feeeeeef777777777f7777777ffffffffffff7777777feeeeeeeefff7777f77777777feeeeeefff77ffeeeeeeeeeeeeeeeef777f
            77ffeeeeeeef77777777777777f7777777777777feeef77777777777feeeeef7777777777f777777ffeeeeeeeefef777777feeeeeeeeff777777f777777777feeeeeeeefffeeeeeeeeeeeeeeeeff777f
            ffeeeeeeeef7777777777777777f777777777777feeeef77777777ffeeeeef7777777777f777777ffffffeeeeeeef77777feeeefefff77777777f7777777777ffffeeeeeeeeeeeeeeeeeeeeeeef7777f
            feeeeeeeeef7777777777777777f777777777777feeeeef777777feeeeeef77777777777f777777777777feeeeeef77777feeefff77777777777f77777777777777fffeeeeeeeeeeeeeeeeeefff7777f
            eeeeeeeeeef777777777777777f777777777777feeeeeeff77777feeeeef77777777777f7777777777777feeeeeef7777feeeef777777777777f777777777777777777ffeeeeeeeeeeeeeeef7777777f
            eeeeeeeeeef777777777777777f77777777777ffeeeeeeeefffffeeeeef7777777777fff77777777777777feeeeeef777feeef777777777777ff77777777777777777777ffeeeeeeeeeeeeef7777777f
            eeeeeeeeeef77777777777777f777777777777feeeeeeeeeeffeeeeeff7777777777f77f77777777777777feeeeeeff7feeeef77777777777f7fff7777777777777777777ffeeeeeeeeeeef77777777f
            eeeeeeeeeef7777777777777fffffff7ffff77feeeeeeeeeeeeeeeeef7777777777ff7ff77777777777777feeeeeeeffeefff777777777777f777f77777777777777777777feeeeeeeeeeef77777777f
            eeeeeeeeeefffff77777777f7777f77f777f7feeeeeeeeeeeeeeeeeef77777777ff777ff777777777777777feeeeeeffeeeef777777777fff7777f77777777777777777777feeeeeeeeeeef7777777f9
            eeeeeeeeeeef77fff7fffff777777777777fffffeeeeeeeeeeeeeeff777777ffff777777ff7fffffff77777feeeeeefeeeeef7777777ff7777777f77777777777777777777feeeeeeeeeeef7777777f9
            eeeeeeeeeeef77777ff777777777777777777ffeeeeeeeeeeeeeeefffff7ff77777777777ff7777777f777f7feeeeeeeeeeeef777777f777777777f7ffffffff7777777777feeeeeeeeffef7777777f9
            eeeeeeeeeeef7777777777777777777777777ffeeeeeeeeeeeeeeeeff77f7777777777777f777777777f7f77feeeeeeeeeeeef777777f777777777ff77777777f777777777feeeeeeef77ff777777f99
            eeeeeeeeeeef7777777777777777777777777ffeeeeeeeeeeeeeeef77777777777777777777777fff777f7777feeeeeeeeeeef777777f7777777777777777777f77777777ffeeeeeeeff77777777ff99
            eeeeeeeeeeef7777777777777777777777777ffeeeeeeeeeeeeeeef7777777777777777777777f999ff777777feeeeeeeeeeef7777ff77777777777777777777f7777777ffeeeeeeeefff7777777f999
            eeeeeeeeeeeef7f777777777777777777777f9feeeeeeeeeeeeeeef7777777777777777777777f99999fff777fffffeeeeeeff7777f7777777777777777777777f7777777feeeeeeeef9f777ffff9999
            eeeeeeeeeeeefff77777777777777777777f99feeeeeeeeeeeeeeeff77777777777777777777fff999999fffffeeeeeeeeeef9ff777ffff7777777777777777777f77777ffeeeeeeeef9ffff99999999
            eeeeeeeeeeeefffff777777777777777777f99feeeeeeeeeeeeeeeff777777777777777f777f9999999999999feeeeeeeeef999f77ff99f77777777777777777ffffffff9feeeeeeeef9f99999999999
            eeeeeeeeeeeeef9fff7777777777777777f9999feeeeeeeeeeeeeeff777777777777777ffff99999999999999feeeeeeeeef999ff77f99ff77777777777777ff999999999feeeeeeef99999999999999
            eeeeeeeeeeeeef999fffffffff77ffffff99999feeeeeeeeeeeeeef9fffffffffffffffeff999999999999999feeeeeeeeef99999ff99999fff77777777fff99999999999feeeeeeef99999999999999
            eeeeeeeeeeeeef9999999feeefffeeef9999999feeeeeeeeeeeeeef99999999999ffeeeeef999999999999999feeeeeeeeef999999999999999ffffffffef99999999999feeeeeeeef99999999999999
            eeeeeeeeeeeeef9999999feeeeeeeeef9999999feeeeeeeeeeeeeef9999999999feeeeeeef999999999999999feeeeeeeeef999999999999999ffeeeeeeef99999999999feeeeeeeef99999999999999
            eeeeeeeeeeeef999999999feeeeeeef99999999feeeeeeeeeeeeeef999999999feeeeeeeef999999999999999feeeeeeeeef99999999999999feeeeeeeef999999999999feeeeeeeef99999999999999
            eeeeeeeeeeeef9999999999feeeeeeeff999999feeeeeeeeeeeeeef999999999feeeeeeff9999999999999999feeeeeeeef99999999999999feeeeeeeef9999999999999feeeeeeeef99999999999999
            eeeeeeeeeeeef9999999999feeeeeeeef999999feeeeeeeeeeeeeef99999999feeeeeeef9999999999999999feeeeeeeeef9999999999999feeeeeeeeef999999999999feeeeeeeeef99999999999999
            eeeeeeeeeeeef9999999999ffeeeeeeef999999feeeeeeeeeeeeef999999999feeeeeeef9999999999999999feeeeeeeeef9999999999999feeeeeeeeef999999999999feeeeeeeeef99999999999999
            eeeeeeeeeeef999999999999feeeeeef9999999feeeeeeeeeeeeef999999999feeeeeeef999999999999999ffeeeeeeeeef9999999999999feeeeeeeeef99999999999feeeeeeeeeef99999999999999
            eeeeeeeeeeef999999999999feeeeeeff999999feeeeeeeeeeeef9999999999feeeeeeeef99999999999999feeeeeeeeeef9999999999999feeeeeeeef99999999999feeeeeeeeeeef99999999999999
            eeeeeeeeeeef999999999999feeeeeeef9999999feeeeeeeeeeef9999999999feeeeeeef99999999999999feeeeeeeeeeef9999999999999feeeeeeeef999999999999feeeeeeeeeeef9999999999999
            eeeeeeeeeef999999999999ffeeeeeeef9999999feeeeeeeeeeef9999999999feeeeeeef99999999999999feeeeeeeeeeef9999999999999feeeeeeeef99999999999feeeeeeeeeeef99999999999999
            eeeeeeeeeef999999999999feeeeeeeeff99999feeeeeeeeeeef9999999999feeeeeeff99999999999999feeeeeeeeeeeef999999999999ffeeeeeeeef99999999999feeeeeeeeeeef99999999999999
            eeeeeeeeeef999999999999feeeeeeeff999999feeeeeeeeeeef9999999999feeeeeeef99999999999999feeeeeeeeeeeef99999999999ffeeeeeeeef999999999999feeeeeeeeeeeef9999999999999
            eeeeeeeeeef99999999999feeeeeeeef9999999feeeeeeeeeeeef999999999feeeeeeef9999999999999feeeeeeeeeeeeeef9999999999feeeeeeeef9999999999999feeeeeeeeeeeef9999999999999
            eeeeeeeeeef99999999999feeeeeeeef999999feeeeeeeeeeeeef99999999feeeeeeeeef999999999999feeeeeeeeeeeeeef9999999999feeeeeeeef9999999999999feeeeeeeeeeef99999999999999
            eeeeeeeeeef99999999999feeeeeeeef999999feeeeeeeeeeeeef99999999feeeeeeeeef99999999999ffeeeeeeeeeeeeef9999999999ffeeeeeeeef9999999999999feeeeeeeeeeef99999999999999
            eeeeeeeeeef99999999999feeeeeeeeef99999feeeeeeeeeeeeef999999999feeeeeeeef99999999999feeeeeeeeeeeeeef999999999ffeeeeeeeeff999999999999ffeeeeeeeeeeeef9999999999999
            eeeeeeeeeef99999999999ffeeeeeeeff9999ffeeeeeeeeeeeeeff99999999feeeeeeeff9999999999feeeeeeeeeeeeeeef999999999feeeeeeeef99999999999999ffeeeeeeeeeeeef9999999999999
            eeeeeeeeeef999999999999feeeeeeef99999feeeeeeeeeeeeeeff9999999feeeeeeeff9999999999ffeeeeeeeeeeeeeeeff99999999ffeeeeeeef99999999999999feeeeeeeeeeeeeef999999999999
            eeeeeeeeeef99999999999feeeeeeeef99999ffeeeeeeeeeeeeeff999999ffeeeeeeeff9999999999feeeeeeeeeeeeeeeeff99999999feeeeeeeeef9999999999999ffeeeeeeeeeeeeef999999999999
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            5555555555ff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551115555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555551555555555555555515555555555555555555555555555551555555555555555155555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555511155555555555555555555555555555555555555555
            5555555155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555515555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551555555
            5555555555555555555555555555555555555551555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555551555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555515555555555555555555555555555555555555555555555555555
            5555555555555555555555515555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555551555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555515555555555555555555555555555555555
            5555555515555555555555555555555555555555555555555555555555555555555555555555555555555555515555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555551555555555555555555555555555555555555555555555555555555555555555555555155555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555515555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555515555555555515555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555551555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555511555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555551555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555115555555555555555555555555555555551555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555155555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555551555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555515555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555515555555555555555555555555555515555555555555555555555555555555555555555555555555555555555555555555
            5555555555155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555155555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
            5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `)
        rowa.entity.setPosition(9, 96)
        if (level == 39)
        {
            game.showLongText("Boss IV", DialogLayout.Bottom)
        }
    }
    else if (level >= 40 && level <= 44)
    {
        // tile
        tiles.setTilemap(tilemap`level_4`)
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffcccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            cffffffffbbbbbbbbbbbbbbbbbbbbbbbbbfffffcfffffffcffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            ccccccccfffbbbbbbbbbbbbbbbbbbbbfffccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff
            ccccccccccffbbbbbbbbbbbbbbbbfffccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffccccc
            ccccccccccccfffbbbbbbbbbbffffcccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
            cccccccccccccccffffffffffccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffcccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffcccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffcccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccc2cccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccfffffffffffffffffffffffccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccc2cccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccc2ccccccccccccccccccccccccccccc22ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccccccccccccc2cccc
            ccccccccccccccccccccccc2ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccc2ccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bbbbbbbbbbbbbbbbbfccccccccccccccccccc2cccccccccccccccccccccccccccccccccccccc
            cccccccccccccc2cccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb22bbbbbbbbbbbbbbbbbbbbbbbbb2bbbbbbbffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbb2bbbbbbbbbbbbbbbbbbbbbbbbffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccc222cccccccccccccccccccccccccccc2cc2cccccccffbbbbbbbbbbbbbbbbb2bbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccc2cccccccccfbb2bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccc2cccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbb2bbbbbbbbbbbffcccccc2cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbb2bbbbbbbbbbbbbbbbbbbbb2bbbbbbffccccccccccccccccc2cccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccc2ccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffccccccccccccccccccccccccccccccccccccccccc2ccccccccccccccccccc
            ccccccccccccccccccccccccc2ccccccccccccccccccccccccf.ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbfffffff222fffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccf2ffffffffffffffffffffffffffffffff222222ffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc22fff222fffffffffffff222fff222222fffffffff222fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccc2cccccccccccccc2222ffff222222222222fffff22fffffffff225552222fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccc2225f22ffffffffffffffffffffff2222225555222222fcccccccccccc2ccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccf22ff2522222222222222222222222222222222222222ffccccccccccccccccccccccccccccccccccccccccccccccccccc2ccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccf22f225555555222222222222222255522222222222222fccccccccccccccccccccccccccc2ccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccf222f222222225555555222222222222222222222222222fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccf522ff222222222222222222222222222222222222222222fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccf2225f222222222222222222222222222222222222222222fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccf52fff2222222222222222222222222222222222222222222fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccf52ff22222222222222222222222552222222222222222222fccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccf522f22222222222555555222222222222222222222222222255c5cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccf22ff2222222555522225555522225222222222255255225552555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccff22f222222255ffffff222ff5222522252555522522255222ffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccf55f2222222255feeeefffff5555525552225ffffffff2555fff2f5fccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccf52ff222222522feeeeeeeeff555ffff222fffeeeeeeefffeeefff55ffcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccf52ff22222555ffeeeeeeeef2525f55effffeeeeeeeeeeeeeeeff22555fccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccf52ff22225552feeeeeeeeef2255feeeeeeeeeeeeeeeeeeeeeeff22255fccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccf555ff2225552feeeeeeeeeef2252feeeeeeeeeeeeeeeeeeeeeeef222222fcccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccf5522ff225552ffeeeeeeeeeef2222feeeeeeeeeeeeeeeeeeeeeee22222f22ffcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccf55225ff225552feeeeeeeeeeeef25feeeeeeeeeeeeeeeeeeeeeeeef222222f2fcccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccf55552ff55555fffeeeeeeeeeeeef25feeeeeeeeeeeeeeeeeeeeeeeeefffff2222fccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccf55522f55552feeeeeeeeeeeeeeef252feeeeeeeeeeeeeeeeeeeeeeeeeeeeff22222cccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccf55522eefffffeeeeeeeeeeeeeeef252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222ffcccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccf555ffeeeeeeeeeeeeeeeeeeeeeeeef25feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff22225fccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccf522ffeeeeeeeeeeeeeeeeeeeeeeeeef55feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff22255ffccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccf5522eeeeeeeeeeeeeeeeeeeeeeeeeeef255eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2225555fcccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccf522feeeeeeeeeeeeeeeeeeeeeeeeeeef25feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222555fccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccf525ffeeeeeeeeeeeeeeeeeeeeeeeeeeef25feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222555ffccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccf5522feeeeeeeeeeeeeeeeeeeeeeeeeeeef25feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222255fcccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccf522ffeeeeeeeeeeeeeeeeeeeeeeeeeeeef25feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222555ffcccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccf5222feeeeeeeeeeeeeeeeeeeeeeeeeeeef252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2f22222255fccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccf5522feeeeeeeeeeeeeeeeeeeeeeeeeeeeef222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222f255fcccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccff5222feeeeeeeeeeeeeeeeeeeeeeeeeeeeef2252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222225f2cccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccf5552feeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222222f552ffccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccff225ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeefef2252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2e222222222552efcccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccff522ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff22252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222222225555fccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccf5522feeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222255feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff22222225522ccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccff55ffeeeeeeeeeeeeeeeeeeeeeeeeeeeefff22222222255eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffe2ff555cccccccccccccccccccccccccc
            ccccccccccccccccccccccccccfeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeff22222222222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22fccccccccccccccccccccccccc
            ccccccccccccccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222222222252ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2255cccccccccccccccccccccc
            ccccccccccccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff222222222222222222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2255fcccccccccccccccccccc
            cccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff225522222222552222222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22252fcccccccccccccccccc
            cccccccccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22255222222225ffffff22225eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222ffcccccccccccccccc
            ccccccccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff222252222222552feeeeeff2255eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff22522effcccccccccccccc
            ccccccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222225522f22222522feeeeeeef225eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff22552fffffccccccccccc
            cccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222555222f22222252feeeeeeef225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef55feeeeeffccccccccc
            cccccccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222255552222f222222252feeeeeeeef225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffcccccc
            ccccccccccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff222555252222ff222222252feeeeeeeeef225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccc
            cccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff222222222222fffef222222252feeeeeeeeef2255fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcc
            cccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff222222222222feeeef22222225feeeeeeeeeeef225222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffc
            cccccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff22222222222222ffeeeeef22222225feeeeeeeeeeeef225555ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
            cccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222222222222feeeeeeef222222255eeeeeeeeeeeeef222255255ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            cfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222222ffff2ffeeeeeeeef22222222f5eeeeeeeeeeeeef2222252222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222222feeeefeeeeeeeeeef222222225eeeeeeeeeeeeeeef2222222522fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff22222222ffeeeeeeeeeeeeeeeef222222225eeeeeeeeeeeeeeeef22222225222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2222222fffeeeeeeeeeeeeeeeeef222222225eeeeeeeeeeeeeeeeef22222255222f5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222222feeeeeeeeeeeeeeeeeeeef222222225eeeeeeeeeeeeeeeeef2222222252225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeff222222222feeeeeeeeeeeeeeeeeeeeef22222225eeeeeeeeeeeeeeeeef22222222222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeef2222222222feeeeeeeeeeeeeeeeeeeeeef22222255eeeeeeeeeeeeeeeeeef22222222222252fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeef222222222feeeeeeeeeeeeeeeeeeeeeeeef2222222feeeeeeeeeeeeeeeeeef2222222222225222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeef22222522feeeeeeeeeeeeeeeeeeeeeeeeef22222222feeeeeeeeeeeeeeeeeeff222222222225552feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeef2222522feeeeeeeeeeeeeeeeeeeeeeeeeeef2222222feeeeeeeeeeeeeeeeeeeefff2222222222252ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeef222522feeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222252feeeeeeeeeeeeeeeeeeeeeef22222222225522feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeef22522feeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222522feeeeeeeeeeeeeeeeeeeeeefff22222222252ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeef25222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2222255ffeeeeeeeeeeeeeeeeeeeeeeeef22222222222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeefff22522feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222522feeeeeeeeeeeeeeeeeeeeeeeef22222222225eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeef22222522feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222225222feeeeeeeeeeeeeeeeeeeeeeeeff22222222f5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeef222222522feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222552feeeeeeeeeeeeeeeeeeeeeeeeeef222222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeff222222252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222552feeeeeeeeeeeeeeeeeeeeeeeeefff2222255ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeef22222222522feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2222222255eeeeeeeeeeeeeeeeeeeeeeeeeeef222222522feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeef222222222522feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222225feeeeeeeeeeeeeeeeeeeeeeeeeeef22222252ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeef222222222252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2222222255eeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222552fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeff222222222552feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2222222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeff22222fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeff2222222222222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222222555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeefeef2222222222222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222222225eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeefff2222222222222ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeff222222222222fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeff2222222222ff5e5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222222255eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeff22222222225555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeef222222255555eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeef222225552ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222222222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeef2222252fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef2222222222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeef222225ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef22222222522feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeef222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222252feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeef22222f5feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222255feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeef2222f5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff22222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeff222f5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222225ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeef222f55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff2222225feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeff222f5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef222222feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
        rowa.entity.setPosition(9, 96)
    }
    else if (level >= 45 && level < 49)
    {
        // tile
        if (level == 45)
        {
            game.showLongText("Final Boss", DialogLayout.Bottom)
        }

        tiles.setTilemap(tilemap`level_5`)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999111111111111199999999999999999999999999999999999999999999999fffffff999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999911111111111111199999999999999999999999999999999999999999999ff4444444ff9999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999911111111111111111999999999999999999999999999999999999999999f44444444444f999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999911111111111111111999999999999999999999999999111111199999999f44444444444f999999999999999999999999999999999999999999999999999
            99999999999999999999999991111111119991111111111111111199999999999999999999999991111111111199999f4444444444444f99999999999999999999999999999999999999999999999999
            99999999999999999999999911111111111991111111111111111199999999999999999999999911111111111119999f4444444444444f99999999999999999999999999999999999999999999999999
            99999999999999999999999111111111111191111111111111111199999999999999999999999911111111111119999f4444444444444f99999999999999999999999999999999999999999999999999
            99999999999999999999991111111111111111111111111111111199999999999999999999999111111111111111999f4444444444444f99999999999999999999999999999999999999991111111119
            99999999999999999999911111111111111111111111111111111199999999999999999999999111111111111111999f4444444444444f99999999999999999999999999991111111999111111111111
            99999999999999999999911111111111111111111111111111111199999999999999999999999111111111111111999f4444444444444f99999999999999999999999999911111111191111111111111
            9999999999999999999991111111111111111111111111111111119999999999999999999999911111111111111199911144444444444f99999999999999999999999999111111111111111111111111
            999999999999999999999111111111111111111111111111111119999999999999999999999991111111111111111111111114444444f999999999999999999999999991111111111111111111111111
            999999999999999999999111111111111111111111111111111199999999999999999999999991111111111111111111111111144444f999999999999999999999999991111111111111111111111111
            9999999999999999999991111111111111111111111111111119999999999999999999999999911111111111111111111111111114ff9999999999999999999999999991111111111111111111111111
            999999999999999999999111111111111111111111111111119999999999999999999999999991111111111111111111111111111f999999999999999999999999999991111111111111111111111111
            9999999999999999999991111111111111111111111111199999999999999999999999999999111111111111111111111111111119999999999999999999999999999991111111111111111111111111
            fffff99999999999999991111111111111111111111111199999999999999999999999999991111111111111111111111111111111999999999999999999999999999991111111111111111111111111
            f7777ff999999999999999111111111111111111111111199999999999999999999999999911111111111111111111111111111111999999999999999999999999999991111111111111111111111111
            7777777ff9999999999999911111111111111111111111199999999999999999999999999911111111111111111111111111111111999999999999999999999999999111111111111111111111111111
            777777777f999999999999991111111111111111111111199999999999999999999999999911111111111111111111111111111111999999999999999999999999911111111111111111111111111111
            7777777777ff9999999999999111111111111111111111199999999999999999999999999911111111111111111111111111111111999999999999999999999999111111111111111111111111111111
            77777777777f9999999999999999999991111111111111999999999999999999999999999911111111111111111111111111111111999999999999999999999999111111111111191111111111111111
            777777777777ff99999999999999999991111111111111999999999999999999999999999911111111111111111111111111111111999999999999999999999991111111111111119111111111111111
            7777fff7777777f9999999999999999999111111111119999999999999999999999999999911111111111111111111111111111111999999999999999999999991111111111111119111111111111111
            7777fff7777777ff999999999999999999991111111999999999999999999999999999999911111111111111111111111111111111999999999999999999999991111111111111119911111111111111
            7777fff777777777f99999999999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999991111111111111119991111111111111
            77777777777777777f9999999999999999999999999999999999999999999999999999999991111111111111111111111111111119999999999999999999999991111111111111119999111111111111
            77777777777777777ff999999999999999999999999999999999999999999999999999999999111111111111111111111111111199999999999999999999999991111111111111119999991111111119
            7777777777777777777f99999999999999999999999999999999999999999999999999999999911111111111991111111111111999999999999999999999999991111111111111119999999999999999
            7777777777777777777ff9999999999999999999999999999999999999999999999999999999991111111119999911111111199999999999999999999999999999111111111111199999999999999999
            77777777777777777777ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111199999999999999999
            777777777777777777777f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111999999999999999999
            777777777777777777777ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111199999999999999999999
            77777777777777fff77777ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            77777777777777fff777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            77fff777777777fff7777777ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            77fff777777777777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            77fff7777777777777777777777ff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            7777777777777777777777777777ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            77777777777777777777777777777ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            777777777777777777777777777777f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            7777777777777777777777777777777ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            77777777777777777777777777777777ff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            777777777777777777777777777777777f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            7777777777777777777777777777777777f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            555555555555555555555555555555555555ff99999999166666666666661888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999991666666666666661888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555f9999999911666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555551555555555555555555555f9999999916666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555ff9999999916666666666666188888888888888888118888888888888888888888888888888888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555f99999999916666666666666188888888888888881881188888888118888888888888888888888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555f99999999991666666666666188888888888888818888818888111888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555f999999999991666666666666188888888888888888888881111888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555f999999999999166666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555155555555555f999999999999166666666666188888888888888888888888888888888888888888888888888f88888888888888888888888888888888888888888888888888
            555555555555555555555555555555555f9999999999999166666666661888888888888888888888888888888888888888888888888fff88888888888888888888888888888888888888888888888888
            555555155555555555555555555555555f9999999999999166666666661888888888888888888888888888888888888881188888fff6f888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555f9999999999999166666666666188888888888888888888888888888888888118888fff6666f888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555f999999999999991666666666618888888888888888888888888888888888118888f6666666f888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555f999999999999916666666666618888888888888888888888888888888888888ff6666666f8888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555ff9999999999991666666666666188888888888888888888888888888888888f666666666f8888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555f999999999999166666666666618888888888888888888888888888888888f6666666666f8888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555ff9999999999166666666666661888888888888888888888888888888888f66666666666f8888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555ff99999999916666666666666618888888888888888888888118811888f66666666666ff8888888188888888888888888888888888818888888888888888
            5555555555515555555555555555555555555f9999999916666666666666661888888888888888888888818881888f66666666666ff88818888188888888888888811118888888118888888888888888
            5555555555555555555555555555555555555ff99999991666666666666666618888888888888888888881888188ffffffffffffff888188888188888888888888188881118811888888888888888888
            55555555555555555555555155555555555555f9999999166666666666666661888888888888888888888188811888888888888888881888881888888888888881888888881188888888888888888888
            55551555555555555555555555555515555555f9999991666666666666666661888888888888888888888188881888888888888888881888881888888888888881888888888888888888888888888888
            55555555555555555555555555555555555555f9999991666666666666666661888888888888888888888818888888888888888888818888818888888888888888888888888888888888888888888888
            55555555555555555555555555555555555555f9999991666666666666666661888888888888888888888881888888881888881888888888188888888888888888888888888888888888888888888888
            5555555555555555555555555555555555555ff9999916666666666666666661888888888888888888888888888888888111118888888888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555555f99999916666666666666666661888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555555f99999916666666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555155555555555555555555555f999999916666666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999916666666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999916666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555f9999999916666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555f9999999916666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555515555555555555555f9999999916666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55515555555555555555555555555555555f9999999916666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555f9999999991666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555155555f9999999991666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555f9999999991666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555f9999999999166666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555555f9999999999166666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999166666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999916666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999916666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999991666666666666188888888888888888888888188888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999991666666666666188888888888888888888811188888888888188888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999999166666666666188888888888888888888188811888888811888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555515555555555f9999999999999166666666666188888888888888888881888888111111188888888888888888888888888888888888888888888888888888888888888888
            55555555555551555555555555555555555f9999999999999166666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555ff9999999999999166666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555f99999999999999166666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555f999999999999991166666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555f999999999999991666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555555555555555555555555555ff999999999999991666666666666661888888888888888888888888888888888888888888888888888888888888888888811188888888888818888888888888
            55555555555555555555555555555555f9999999999999991666666666666661888888888888888888888888888888888888888888888888888888888888888888188818888888888188888888888888
            55555555555555555555555555555555f9999999999999991666666666666666188888888888888888888888888888888888888888888888888888888888888881888881111111111188888888888888
            555555555555555555555555555555555f999999999999991666666666666666188888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888
            555555555555555555555555555555555f999999999999991666666666666666118888888888888888888888888888888888888888888888888888888888888818888888888888888888888888888888
            5555555555555555555555555555555555f99999999999991666666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555555155555555155555555555555555f9999999999991666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            55555551155555555555555555555555555ff999999999991666666666666666188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999991666666666666661188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999991666666666666661888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555155555555555555555555555f999999999991666666666666611888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999991666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555155555555555f999999999916666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999916666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999916666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999916666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555ff99999999916666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            5555555555555555555555555555555555555f99999999916666666666666618888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            555555555555555555555555555555555555f999999999911166666666666611888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
        rowa.entity.setPosition(9, 96)
    }
    else
    {
        game.over(true)
    }
}

function create_enemy()
{
    // Enemy (JK)
    for(let value of tiles.getTilesByType(myTiles.tile8))
    {
        // enemy that moves back and forth
        jk = new jk_ch(sprites.create(img`
            ................................
            ................................
            ....................ff..........
            ................fffff...........
            ..............fff77f............
            ..............f7fff.............
            ............fff77ff.............
            ...........ff77ff7fff...........
            ....ffffffff77ff77f7ff..........
            ...ff777777777ff77fffff.........
            ...f77777777777777ff............
            ....ffffffffff7777ff............
            .............f7777ffff..........
            ............fff777f77fff........
            ....f......ff5f777ff7fff........
            ....ffffffff555f777fff..........
            ....ffbbbbbf555f777ff...........
            ....ffffffff555f777ffff.........
            ...........f555f777f77ff........
            ...........ff5f77fffffff........
            .....ffffffffff7fffff...........
            ....f5aaaaaaafffaaffff..........
            ....f5aaaaaaaaaaaaaaaff.........
            ....ffffaaaaaaaaaaaaaaff........
            ...ff222ffffffffffffffffffff....
            ...ff222ff...........ff999ff....
            ....fffff............fffffff....
            ................................
            ................................
            ................................
            ................................
            ................................
        `, SpriteKind.Enemy))

        tiles.placeOnTile(jk.entity, value)
        tiles.setTileAt(value, myTiles.tile9) 
    }
}

function create_rowa ()
{
    rowa = new main_ch(sprites.create(img`
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
    `, SpriteKind.Player))
}

function rowa_move(mainRunRight:any, mainRunLeft:any, mainIdle:any)
{
    //controll
    controller.moveSprite(rowa.entity,80,0)
    controller.A.onEvent(ControllerButtonEvent.Pressed,rowa.jump(-150))
    controller.right.onEvent(ControllerButtonEvent.Pressed,
    rowa.walk_right(mainRunRight,
                    mainRunRight.addAnimationFrame(img`
                        ................................
                        ...........ffffffff.............
                        .........ffffffffffff...........
                        ........ffffffffffffff..........
                        ........ffffffffffffff..........
                        ........ffffffff4444ff..........
                        .......ffffffff444444ff.........
                        .......fffffff444fff44f.........
                        .......fffffff4444ff44f.........
                        .......fffffff44444444f.........
                        .......fffffff44444444f.........
                        .......fffffff44444444f.........
                        .......fffffff444fff4f..........
                        .......fffffff4444444f..........
                        ........ffffff444444f...........
                        .........fffffffffff............
                        .........ffff.f44f..............
                        .........ffffffeeff.............
                        ..........ff.feeeef.............
                        ...........f.feee8f.............
                        .............feeeef.............
                        .............fe4eef.............
                        .............fe44ef.............
                        .............fe44ef.............
                        .............fffff5.............
                        ..............fbbf..............
                        ..............fbbf..............
                        ..............fbbf..............
                        ..............fbbf..............
                        ..............fbbf..............
                        ..............ffffff............
                        ..............feeeef............
                    `),
                    mainRunRight.addAnimationFrame(img`
                        .......ffffffff.......
                        .....ffffffffffff.....
                        ....ffffffffffffff....
                        ....ffffffffffffff....
                        ....ffffffff4444ff....
                        ...ffffffff444444ff...
                        ...fffffff444fff44f...
                        ...fffffff4444ff44f...
                        ...fffffff44444444f...
                        ...fffffff44444444f...
                        ...fffffff44444444f...
                        ...fffffff444fff4f....
                        ...fffffff4444444f....
                        ....ffffff444444f.....
                        .....fffffffffff......
                        .....ffff.f44f........
                        .....ffffffeeff.......
                        ......ff.feeeef.......
                        .......f.feee8f.......
                        .........feeeef.......
                        .........fe4eef.......
                        .........fe44ef.......
                        .........fe44ef.......
                        .........fffff5.......
                        .........fbbbff.......
                        ........ffbbfbf.......
                        ........fbbbfbbf......
                        ........fbbf.fbf......
                        ........fbbf.fbbf.....
                        ........ffffffffff....
                        ........feeeffeeef....
                    `)))
    controller.left.onEvent(ControllerButtonEvent.Pressed,
    rowa.walk_left( mainRunLeft,
                    mainRunLeft.addAnimationFrame(img`
                        ................................
                        .............ffffffff...........
                        ...........ffffffffffff.........
                        ..........ffffffffffffff........
                        ..........ffffffffffffff........
                        ..........ff4444ffffffff........
                        .........ff444444ffffffff.......
                        .........f44fff444fffffff.......
                        .........f44ff4444fffffff.......
                        .........f44444444fffffff.......
                        .........f44444444fffffff.......
                        .........f44444444fffffff.......
                        ..........f4fff444fffffff.......
                        ..........f4444444fffffff.......
                        ...........f444444ffffff........
                        ............fffffffffff.........
                        ..............f44f.ffff.........
                        .............ffeeffffff.........
                        .............feeeef.ff..........
                        .............f8eeef.f...........
                        .............feeeef.............
                        .............fee4ef.............
                        .............fe44ef.............
                        .............fe44ef.............
                        .............5fffff.............
                        ..............fbbf..............
                        ..............fbbf..............
                        ..............fbbf..............
                        ..............fbbf..............
                        ..............fbbf..............
                        ............ffffff..............
                        ............feeeef..............
                    `),
                    mainRunLeft.addAnimationFrame(img`
                        .......ffffffff.......
                        .....ffffffffffff.....
                        ....ffffffffffffff....
                        ....ffffffffffffff....
                        ....ff4444ffffffff....
                        ...ff444444ffffffff...
                        ...f44fff444fffffff...
                        ...f44ff4444fffffff...
                        ...f44444444fffffff...
                        ...f44444444fffffff...
                        ...f44444444fffffff...
                        ....f4fff444fffffff...
                        ....f4444444fffffff...
                        .....f444444ffffff....
                        ......fffffffffff.....
                        ........f44f.ffff.....
                        .......ffeeffffff.....
                        .......feeeef.ff......
                        .......f8eeef.f.......
                        .......feeeef.........
                        .......fee4ef.........
                        .......fe44ef.........
                        .......fe44ef.........
                        .......5fffff.........
                        .......ffbbbf.........
                        .......fbfbbff........
                        ......fbbfbbbf........
                        ......fbf.fbbf........
                        .....fbbf.fbbf........
                        ....ffffffffff........
                        ....feeeffeeef........
                    `)))

    controller.right.onEvent(ControllerButtonEvent.Released,
    rowa.idle(      mainIdle,
                    mainIdle.addAnimationFrame(img`
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
                    `)))
    controller.left.onEvent(ControllerButtonEvent.Released,
    rowa.idle(      mainIdle,
                    mainIdle.addAnimationFrame(img`
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
                    `)))
}

function jk_move()
{   
    let jk_array = sprites.allOfKind(SpriteKind.Enemy) // คือ array ของ jk ที่อยู่ในฉาก
    for(let enemy of jk_array)
    {
        if (Math.abs(enemy.x - rowa.entity.x) < 50)
        {
            if (enemy.x - rowa.entity.x < -5)
            {
                enemy.vx = 10
            }
            else if (enemy.x - rowa.entity.x > 5)
            {
                enemy.vx = -10
            }
            if (enemy.y - rowa.entity.y < -5)
            {
                enemy.vy = 10
            }
            else if (enemy.y - rowa.entity.y > 5)
            {
                enemy.vy = -10
            }
        }
        else
        {
            enemy.vx = 0
            enemy.vy = 0
        }
    }
}

// animation rowa
mainRunRight = animation.createAnimation(ActionKind.MoveRight, 200)
mainRunLeft = animation.createAnimation(ActionKind.MoveLeft, 200)
mainIdle = animation.createAnimation(ActionKind.Idle, 200)

// start game
create_rowa() // สร้าง rowa
rowa_move(mainRunRight, mainRunLeft, mainIdle) // จัดการเกี่ยวกับการเคลื่อนไหวของ rowa
next_level() // จัดการเกี่ยวกับฉาก
create_enemy() // สร้างศัตรู
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, rowa.lose()) // ตกหลุมตาย
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, rowa.next()) // เข้าเส้นชัยชนะ

// updating game
game.onUpdate(
function ()
{
    jk_move()
    scene.centerCameraAt(rowa.entity.x, 0)
    if (rowa.entity.vx > 0 && rowa.entity.vy == 0)
    {
        animation.setAction(rowa.entity, ActionKind.MoveRight)
    }
    else if (rowa.entity.vx < 0 && rowa.entity.vy == 0)
    {
        animation.setAction(rowa.entity, ActionKind.MoveLeft)
    }
    else
    {
        animation.setAction(rowa.entity, ActionKind.Idle)
    }
})
