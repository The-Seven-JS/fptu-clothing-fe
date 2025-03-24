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
        <div style={{marginBottom: '30px' , marginTop: '30px', display:'flex', flexDirection:'column',gap:'30px'}} className="leglength_items">
            <Accordion multiple >
            {/* <Accordion.Item key={option1.id} value={option1.id} className='leglength_item'>
                <Accordion.Control>
                    <div style={{display: 'flex', flexDirection:'row', gap: '20px', alignItems:'center'}}>
                        {<Avatar src={option1.src} radius='xl' size='md'/>}
                        <h3>{option1.name}</h3>
                    </div>
                </Accordion.Control>
                <Accordion.Panel>
                    <h2>Cách đo chiều cao lúc ngồi</h2>
                    <ol>
                        <li>Đặt thước đo từ mặt ghế (điểm tiếp xúc của mông) lên đến đỉnh đầu.</li>
                        <li>Đảm bảo thước đo thẳng đứng và vuông góc với mặt ghế.</li>
                    </ol>
                    <p>Số liệu này được sử dụng để tính chỉ số Skelie. Từ chỉ số này, chúng tôi có thể xác định được chiều dài đôi chân của bạn.</p>
                    <TextInput mt="md"
                        rightSectionPointerEvents='none'
                        rightSection="cm"
                        label="Chiều cao lúc ngồi"
                        placeholder='Chiều cao'
                        value={sitHeight}
                        onChange={(event) => {
                            if (!isNaN(event.target.value)){
                                setSitHeight(event.target.value)
                            }
                            else{
                                notifications.show({
                                    id:'warning',
                                    position:'bottom-right',
                                    withBorder:'true',
                                    autoClose:'500',
                                    title:'WARNING',
                                    color:'#cc3300',
                                    message:'Vui lòng nhập đúng định dạng!',
                                    icon:<GoAlertFill/>
                                })
                                setSitHeight(sitHeight)
                            }
                        }}
                    />
                    <TextInput mt="md"
                        rightSectionPointerEvents='none'
                        rightSection="cm"
                        label="Chiều cao lúc đứng"
                        placeholder='Chiều cao'
                        value={standHeight}
                        onChange={(event) => {
                            if (!isNaN(event.target.value)){
                                setStandHeight(event.target.value)
                            }
                            else{
                                notifications.show({
                                    id:'warning',
                                    position:'bottom-right',
                                    withBorder:'true',
                                    autoClose:'500',
                                    title:'WARNING',
                                    color:'#cc3300',
                                    message:'Vui lòng nhập đúng định dạng!',
                                    icon:<GoAlertFill/>
                                })
                                setStandHeight(standHeight)
                            }
                        }}
                    />
                </Accordion.Panel>
            </Accordion.Item> */}
            <Accordion.Item key={option2.id} value={option2.id} className='leglength_item'>
                <Accordion.Control>
                <div style={{display: 'flex', flexDirection:'row', gap: '20px', alignItems:'center'}}>
                    {<Avatar src={option2.src} radius='xl' size='md'/>}
                    <h3>{option2.name}</h3>
                </div>
                </Accordion.Control>
                <Accordion.Panel className='leglength_item'>
                    <h2>Nếu bạn không thể xác định độ dài chân, cũng đừng lo!</h2>
                    <p>Các bạn làm theo hướng dẫn của chúng tôi để đo được kết quả tương đối chính xác nhé!</p>
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
                            <Group wrap='nowrap' align='flex-start' >
                                <Center>
                                    <CheckboxIndicator/>
                                    <div>
                                        <h2 style={{marginLeft: '30px', fontSize:'16px'}}>Chân siêu dài</h2>
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
                                    <CheckboxIndicator/>
                                    <div>
                                        <h2 style={{marginLeft: '30px', fontSize: '16px'}}>Chân dài</h2>
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
                                    <CheckboxIndicator/>
                                    <div>
                                        <h2 style={{marginLeft: '30px', fontSize:'16px'}}>Chân ngắn</h2>
                                    </div>
                                </Center>
                            </Group>
                        </CheckboxCard>
                    </div>
                </Accordion.Panel>
            </Accordion.Item>
            </Accordion>
        </div>
        </div>
        <Link to='/test/result' state={{message: message}} onClick={handleData}>
            <button className='test_button_class'>Hoàn thành</button>
        </Link>
    </div>
  )
}

export default LegComputeScreen