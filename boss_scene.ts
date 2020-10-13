// **************************************boss scene**************************************
function boss_scene(turn_: number)
{
    let attack = sprites.allOfKind(SpriteKind.Projectile)
    if(turn_ < 3)
    {
        info.startCountdown(3)
        check_input()

        //สร้างโรงงาน
        //dango.entity.say(choose_boss_game[0] + choose_boss_game[1] + choose_boss_game[2])
        

        if(choose_boss_game != [] && boss_num == 1)
        {
            if(choose_boss_game[0] != get_input[0] || choose_boss_game[1] != get_input[1] || choose_boss_game[2] != get_input[2])
            { 
                dango.ball_attack()
                //rowa.entity.vy = rowa.JUMP
                //game.over(false, effects.melt)
            }
            else
            {
                dango.ball_attack()
                rowa.entity.vy = rowa.JUMP
            }
        }

        choose_boss_game = [boss_game[randint(0, 5)], boss_game[randint(0, 5)], boss_game[randint(0, 5)]]
        console.log(choose_boss_game[0] +" "+ choose_boss_game[1] +" "+ choose_boss_game[2])
        rowa.entity.say(choose_boss_game[0] +" "+ choose_boss_game[1] +" "+ choose_boss_game[2], 3000)
        turn += 1
    }
    else
    {
        //สร้างโรงงาน
        console.log(choose_boss_game[0] +" "+ choose_boss_game[1] +" "+ choose_boss_game[2])
        //dango.entity.say(choose_boss_game[0] +" "+ choose_boss_game[1] +" "+ choose_boss_game[2], 3000)
        if(choose_boss_game != [] && boss_num == 1)
        {
            if(choose_boss_game[0] != get_input[0] || choose_boss_game[1] != get_input[1] || choose_boss_game[2] != get_input[2])
            {
                dango.ball_attack()
                //rowa.entity.vy = rowa.JUMP
                //game.over(false, effects.melt)
            }
            else
            {
                turn = 0
                let temp = rowa.next()
                temp()
            }
        }
    }
}

function check_input()
{
    // B
    controller.B.onEvent(ControllerButtonEvent.Pressed,rowa.push_B())

    // up&down
    controller.up.onEvent(ControllerButtonEvent.Pressed,rowa.up())
    controller.down.onEvent(ControllerButtonEvent.Pressed,rowa.down())
}
// **************************************
