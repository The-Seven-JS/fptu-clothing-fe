import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from '/src/styles/legcomputed.module.css'
import "/src/styles/MainTestScreen.css"
import { Accordion, AccordionPanel, Avatar, Center, CheckboxCard, CheckboxIndicator, Group, Notification, TextInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { GoAlertFill } from 'react-icons/go';
function LegComputeScreen() {
    const [sitHeight, setSitHeight] = useState('')
    const [standHeight, setStandHeight] = useState('')
    const [checkedValue2, setCheckedValue2] = useState(null)
    const location = useLocation()
    const message = location.state?.message || 'No data passed';
    
    const skelieCompute = (up, down) => (up/down)*100
    const handleData = (e) =>{
        const up = parseFloat(standHeight)/100
        const down = parseFloat(sitHeight)/100
        const temp = skelieCompute(up, down)
        let res = 0
        if (temp <= 82.7) {
            res = 1
        } else if (temp <= 87.4) {
            res = 2
        } else if (temp <= 92.1) {
            res = 3
        }
        if (res != checkedValue2 && res != 0){
            e.preventDefault()
            notifications.show({
                id:'warning',
                position:'bottom-right',
                withBorder:'true',
                autoClose:'500',
                title:'WARNING',
                color:'#cc3300',
                message:'Bạn đang nhập cả hai loại dữ liệu cùng một lúc, và chúng không trùng khớp với nhau!',
                icon:<GoAlertFill/>
            }) 
        }
        else if (res == 0 && checkedValue2){
            message.leg = checkedValue2
            console.log(message)
        }
        else{
            message.leg = res
            console.log(message)
        }
    }
    const option1 =   {
            id: 'option1',
            src:'/image/measuring.svg',
            name: 'Xác định bằng thước đo',
            description:'dadas'
        }
    const option2 =
        {
            id: 'option2', 
            src:'/image/questionning.png',
            name: 'Xác định bằng ước lượng (Dành cho những bạn không rõ cách đo)',
            description:'daasd'
        }
  return (
    <div className='leglength_container'>
        <div className='leglength_text'>
            <h2>Tới bước cuối - Xác định độ dài chân rồi nè!</h2>
            <p>Qua chiều dài chân, chúng tôi có thể xác định đúng tỉ lệ chân - lưng, giúp bạn tránh chọn phải những bộ trang phục dìm dáng, từ đó tự tin hơn mỗi khi ra ngoài.</p>
        </div>
        <div>
        <div style={{marginTop: '0', display:'flex', flexDirection:'column',gap:'30px',marginBottom:'10px'}} className="leglength_items">
            <Accordion multiple >
                <Center>
                    <img className="leg_img" src='/image/khong_biet_do.svg'></img>
                </Center>
                <div style={{display: 'flex', flexDirection: 'row', gap: '10px', marginTop:'30px'}}>
                    <CheckboxCard
                        className={classes.root}
                        radius="md"
                        checked={checkedValue2 === 3? true: false}
                        onClick={() => setCheckedValue2((c) => 3)}
                        
                        >
                        <Group wrap='nowrap' align='flex-start'>
                            <Center>
                                <CheckboxIndicator  style={{marginLeft: '10px'}}/>
                                <div>
                                    <h2 style={{marginLeft: '30px', fontSize:'16px', marginBottom:'14px'}}>Chân dài</h2>
                                </div>
                            </Center>
                        </Group>
                    </CheckboxCard>
                    <CheckboxCard
                        className={classes.root}
                        radius="md"
                        checked={checkedValue2 === 2? true: false}
                        onClick={() => setCheckedValue2((c) => 2)}
                        >
                        <Group wrap='nowrap' align='flex-start' >
                            <Center>
                                <CheckboxIndicator  style={{marginLeft: '10px'}}/>
                                <div>
                                    <h2 style={{marginLeft: '30px', fontSize: '16px', marginBottom:'14px'}}>Chân vừa</h2>
                                </div>
                            </Center>
                        </Group>
                    </CheckboxCard>
                    <CheckboxCard
                        className={classes.root}
                        radius="md"
                        checked={checkedValue2 === 1? true: false}
                        onClick={() => setCheckedValue2((c) => 1)}
                        >
                        <Group wrap='nowrap' align='flex-start' >
                            <Center>
                                <CheckboxIndicator  style={{marginLeft: '10px'}}/>
                                <div>
                                    <h2 style={{marginLeft: '30px', fontSize:'16px', marginBottom:'14px'}}>Chân ngắn</h2>
                                </div>
                            </Center>
                        </Group>
                    </CheckboxCard>
                </div>
        </Accordion>
        </div>
        </div>
        <Link to='/test/result' state={{message: message}} onClick={handleData}>
            <button className='test_button_class' style={{marginBottom:'0'}}>Hoàn thành</button>
        </Link>
    </div>
  )
}

export default LegComputeScreen