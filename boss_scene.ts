// **************************************boss scene**************************************
function boss_scene(turn_: number)
{
    if(turn_ < 3)
    {
        info.startCountdown(3)
        check_input()

        //สร้างโรงงาน
        //dango.entity.say(choose_boss_game[0] + choose_boss_game[1] + choose_boss_game[2])
        
        for(let i=0; i<3; i++)
        {
            if(choose_boss_game != [] && boss_num == 1)
            {
                if(choose_boss_game[i] != get_input[i])
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
        }

        choose_boss_game = [boss_game[randint(0, 5)], boss_game[randint(0, 5)], boss_game[randint(0, 5)]]
        console.log(choose_boss_game[0] +" "+ choose_boss_game[1] +" "+ choose_boss_game[2])
        rowa.entity.say(choose_boss_game[0] +" "+ choose_boss_game[1] +" "+ choose_boss_game[2], 3000)
        turn += 1
    }
    else
    {
        turn = 0
        //สร้างโรงงาน
        console.log(choose_boss_game[0] +" "+ choose_boss_game[1] +" "+ choose_boss_game[2])
        //dango.entity.say(choose_boss_game[0] +" "+ choose_boss_game[1] +" "+ choose_boss_game[2], 3000)
        for(let i=0; i<3; i++)
        { 
            if(choose_boss_game != [] && boss_num == 1)
            {
                if(choose_boss_game[i] != get_input[i])
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
        }
        let temp = rowa.next()
        temp()
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
