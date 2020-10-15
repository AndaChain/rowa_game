enum ActionKind
{
    MoveRight,
    MoveLeft,
    Idle,
    Walking,
    Jumping
}

enum ActionKind_jk
{
    MoveRight,
    MoveLeft,
    Idle,
}

enum EnemyKind
{
    JK,
    Boss
}

let jk: jk_ch = null
let rowa: rowa_ch = null
let dango: dango_ch = null

let mainIdle = null
let mainRunLeft = null
let mainRunRight = null

let jkIdle = null
let jkRunLeft = null
let jkRunRight = null

let level = 0
let enemy_num = 0
let boss_num = 0
let turn = 0

let get_input: string[] = []
let boss_game: string[] = ["right","left","up","down","A","B"]
//let choose_boss_game: string[] = [boss_game[randint(0, 3)], boss_game[randint(0, 3)], boss_game[randint(0, 3)]]
let choose_boss_game: string[] = []
let jk_array_: jk_ch[] = []
let state: boolean[] = [true, false]

// animation rowa
mainRunRight = animation.createAnimation(ActionKind.MoveRight, 200)
mainRunLeft = animation.createAnimation(ActionKind.MoveLeft, 200)
mainIdle = animation.createAnimation(ActionKind.Idle, 200)

class character
{
    entity: Sprite = null
    GRAVITY: number = 294
    VELOCITY: number = 80
    constructor(entity: Sprite)
    {
        this.entity = entity
        this.entity.ay = this.GRAVITY
    }

    set_VELOCITY(VELOCITY: number)
    {
        controller.moveSprite(this.entity,VELOCITY,0)
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
            get_input.push("A")
        }
        return func
    }

    walk_right(main:any ,frame_1 : any, frame_2: any, frame_3: any = null)
    {
        function func()
        {
            animation.attachAnimation(this.entity, main)
            frame_1
            frame_2
            frame_3
            get_input.push("right")
        }
        //console.log("I am walking to right")
        return func
    }

    walk_left(main:any ,frame_1 : any, frame_2: any, frame_3: any = null)
    {
        function func()
        {
            //mainRunLeft = animation.createAnimation(ActionKind.MoveLeft, 100)
            animation.attachAnimation(this.entity, main)
            frame_1
            frame_2
            frame_3
            get_input.push("left")
        }
        //console.log("I am walking to left")
        return func
    }

    up()
    {
        function func()
        {
            get_input.push("up")
        }
        return func
    }

    down()
    {
        function func()
        {
            get_input.push("down")
        }
        return func
    }

    push_B()
    {
        function func()
        {
            get_input.push("B")
        }
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
        //console.log("I stay idle")
        return func
    }
}

class rowa_ch extends character
{
    JUMP: number = -150
    constructor(entity: Sprite)
    {
        super(entity)
        controller.moveSprite(this.entity,this.VELOCITY,0)
        controller.A.onEvent(ControllerButtonEvent.Pressed,this.jump(this.JUMP))
    }

    set_JUMP(JUMP: number)
    {
        controller.A.onEvent(ControllerButtonEvent.Pressed,this.jump(JUMP))
    }

    next()
    {
        function func()
        {
            level += 1
            next_level()
            destroy(sprites.allOfKind(EnemyKind.JK))

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

class dango_ch extends character
{
    projectile: Sprite = null
    constructor(entity: Sprite)
    {
        super(entity)
    }

    ball_attack()
    {
        this.projectile = sprites.createProjectileFromSprite(img`
            ................................
            ................................
            ..........22222222222...........
            ........222222222222222.........
            .......22223333333332222........
            ......2223333333333333222.......
            .....222333333333333333222......
            ....22233333333333333333222.....
            ...2223333335555555333333222....
            ...2233333554444444553333322....
            ..222333354444444444453333222...
            ..223333354444444444453333322...
            ..223333544444444444445333322...
            ..223333544444444444445333322...
            ..223333544444444444445333322...
            ..223333544444444444445333322...
            ..223333544444444444445333322...
            ..223333544444444444445333322...
            ..223333544444444444445333322...
            ..223333354444444444453333322...
            ..222333354444444444453333222...
            ...2233333554444444553333322....
            ...2223333335555555333333222....
            ....22233333333333333333222.....
            .....222333333333333333222......
            ......2223333333333333222.......
            .......22223333333332222........
            ........222222222222222.........
            ..........22222222222...........
            ................................
            ................................
            ................................
                            `, this.entity, 100, 0)
    }

}

// *******************destroying character*******************
function destroy(Kind: any[])
{
    for (let value of Kind)
    {
        value.destroy()
    }
}
// **************************************

// **************************************check_position**************************************
function set_Action(entity_:any, action_right:any, action_left:any, action_idle:any)
{
    if (entity_.entity.vx > 0 )//&& entity_.entity.vy == 0)
    {
        animation.setAction(entity_.entity, action_right)
    }
    else if (entity_.entity.vx < 0 )//&& entity_.entity.vy == 0)
    {
        animation.setAction(entity_.entity, action_left)
    }
    else
    {
        animation.setAction(entity_.entity, action_idle)
    }
}
// **************************************




// start game
create_rowa() // สร้าง rowa
rowa_move(mainRunRight, mainRunLeft, mainIdle) // จัดการเกี่ยวกับการเคลื่อนไหวของ rowa
next_level() // จัดการเกี่ยวกับฉาก
//create_jk() // สร้างศัตรู
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, rowa.lose()) // ตกหลุมตาย
sprites.onOverlap(SpriteKind.Player, EnemyKind.JK, rowa.lose()) // โดน jk ตาย
sprites.onOverlap(SpriteKind.Player, EnemyKind.Boss, rowa.lose()) // โดน dango ตาย
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, rowa.lose()) // โดน ball ตาย


scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, rowa.next()) // เข้าเส้นชัยชนะ
scene.onOverlapTile(SpriteKind.Player, myTiles.tile65, rowa.next()) // เข้าเส้นชัยชนะ
scene.onOverlapTile(SpriteKind.Player, myTiles.tile67, rowa.next()) // เข้าเส้นชัยชนะ
scene.onOverlapTile(SpriteKind.Player, myTiles.tile68, rowa.next()) // เข้าเส้นชัยชนะ



// updating game
game.onUpdate(
function ()
{
    create_jk()
    jk_move()

    create_dango(level) 

    scene.centerCameraAt(rowa.entity.x, 0)

    set_Action(rowa, ActionKind.MoveRight, ActionKind.MoveLeft, ActionKind.Idle)

    if(level%10 >= 6 && boss_num == 0)
    {
        rowa.set_VELOCITY(160)
        rowa.set_JUMP(-200)
    }
    else if(level%10 < 6 && boss_num == 0)
    {
        rowa.set_VELOCITY(rowa.VELOCITY)
        rowa.set_JUMP(rowa.JUMP)
    }
    else if(boss_num == 1 && level != 49)
    {
        rowa.set_VELOCITY(0)
        rowa.set_JUMP(0)
    }
    else if(level == 49)
    {
        dango_move()
    }
})



function enemy_location(input_array: tiles.Location[])
{
    let temp = []
    for(let jk_arr of input_array)
    {
        temp.push([jk_arr.x, jk_arr.y])
    }

    return temp
}

forever(function()
{
    // background music
    if( level%10 == 9 || (level >= 40 && level <= 44) )
    {
        music.playMelody("C5 - C5 - C5 B A C5 ", 318)
        music.playMelody("B B - B C5 B A G ", 303)
        music.playMelody("G - G A - A B B ", 300)
    }
    else
    {
        if(level%10 < 6)
        {
            music.playMelody("C5 G A B A G G B ", 250)
            music.playMelody("B G - A G A - G ", 250)
        }
        else
        {
            music.playMelody("C5 G A B A G G B ", 333)
            music.playMelody("B G - A G A - G ", 333)
        }
    } 
})