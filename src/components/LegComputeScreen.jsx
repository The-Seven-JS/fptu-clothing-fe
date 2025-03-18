import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from '/src/styles/legcomputed.module.css'
import "/src/styles/MainTestScreen.css"
import { Accordion, AccordionPanel, Avatar, Center, CheckboxCard, CheckboxIndicator, Group, Notification, TextInput } from '@mantine/core';
function LegComputeScreen() {
    const [checkedValue1, setCheckedValue1] = useState({ up: 0, down: 0 })
    const [checkedValue2, setCheckedValue2] = useState(null)
    const location = useLocation()
    const message = location.state?.message || 'No data passed';
    const skelieCompute = (up, down) => (up-down)*100
    const handleData = (checkedValue1,checkedValue2) =>{
        if (checkedValue1.up == null && checkedValue1.down != null || checkedValue1.down == null && checkedValue1.up != null){
            return (
                <Notification title="WARNING">
                    Bạn cần phải nhập đầy đủ cả thông tin chiều cao khi ngồi hoặc đứng
                </Notification>
            )
        }
        else if (checkedValue2 != null){
            message.leg = checkedValue2
        }
        else{
            const temp = skelieCompute(checkedValue1.up, checkedValue1.down)
            if (temp <= 82.7){
                message.leg = 1
            }
            else if (temp <= 87.4){
                message.leg = 2
            }
            else if (temp <= 92.1){
                message.leg = 3
            }
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
        <div>
            <h2>Tới bước cuối - Xác định độ dài chân rồi nè!</h2>
            <p>Qua chiều dài chân, chúng tôi có thể xác định đúng tỉ lệ chân - lưng, giúp bạn tránh chọn phải những bộ trang phục dìm dáng, từ đó tự tin hơn mỗi khi ra ngoài.</p>
        </div>
        <div>
        <div style={{marginBottom: '30px' , marginTop: '30px', display:'flex', flexDirection:'column',gap:'30px'}}>
            <Accordion multiple >
            <Accordion.Item value={option1.id} className='leglength_item'>
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
                        value={checkedValue1.down}
                        onChange={(event) => setCheckedValue1((prev) => ({ ...prev, down: event.currentTarget.value }))}
                    />
                    <TextInput mt="md"
                        rightSectionPointerEvents='none'
                        rightSection="cm"
                        label="Chiều cao lúc đứng"
                        placeholder='Chiều cao'
                        value={checkedValue1.up}
                        onChange={(event) => setCheckedValue1((prev) => ({up: event.currentTarget.value, ...prev}))}
                    />
                </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value={option2.id} className='leglength_item'>
                <Accordion.Control>
                <div style={{display: 'flex', flexDirection:'row', gap: '20px', alignItems:'center'}}>
                    {<Avatar src={option2.src} radius='xl' size='md'/>}
                    <h3>{option2.name}</h3>
                </div>
                </Accordion.Control>
                <Accordion.Panel>
                    <h1>Nếu bạn không thể xác định độ dài chân, cũng đừng lo!</h1>
                    <p>Các bạn làm theo hướng dẫn của chúng tôi để đo được kết quả tương đối chính xác nhé!</p>
                    <Center>
                        <img src='/image/khong_biet_do.svg'></img>
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
                                        <h2 style={{marginLeft: '30px', fontSize:'16px'}}>Chân dài</h2>
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
                                        <h2 style={{marginLeft: '30px', fontSize: '16px'}}>Chân vừa</h2>
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
        <Link to='/test/result' state={{message: message}}>
            <button className='test_button_class' onClick={() => {
                message.leg = currentLeg
            }}>Hoàn thành</button>
        </Link>
    </div>
  )
}

export default LegComputeScreen