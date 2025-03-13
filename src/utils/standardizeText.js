function standardizeText(input, gender) {
    // Khai báo cấu trúc format ban đầu với các giá trị đã xác định
    if (gender =='female'){
        const female_format = [
        {
            header: 'Trang phục',
            content: [
                {
                    subheader: 'Áo',
                    content: [
                        { title: 'Cổ', content: 'Need to find' },
                        { title: 'Kiểu dáng', content: 'Need to find' },
                        { title: 'Màu sắc', content: 'Need to find' },
                        { title: 'Chất liệu', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Quần',
                    content: [
                        { title: 'Kiểu dáng', content: 'Need to find' },
                        { title: 'Màu sắc', content: 'Need to find' },
                        { title: 'Chất liệu', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Váy',
                    content: [
                        { title: 'Kiểu dáng', content: 'Need to find' },
                        { title: 'Màu sắc', content: 'Need to find' },
                        { title: 'Chất liệu', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Áo khoác/Blazer',
                    content: [
                        { title: 'Kiểu dáng', content: 'Need to find' },
                        { title: 'Màu sắc', content: 'Need to find'}
                    ]
                },
                {
                    subheader: 'Suit',
                    content: [
                        { title: 'Kiểu dáng', content: 'Need to find' },
                        { title:'Màu sắc', content: 'Need to find'}
                    ]
                }
            ]
        },
        {
            header: 'Phụ kiện',
            content: [
                {
                    subheader: 'Giày',
                    content: [
                        { title: 'Giày', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Thắt lưng',
                    content: [
                        { title: 'Thắt lưng', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Phụ kiện khác',
                    content: [
                        { title: 'Phụ kiện khác', content: 'Need to find' }
                    ]
                }
            ]
        }
    ];
    return processText(female_format,input)
    }
    if (gender == 'male'){
        const male_format = [
            {
            header: 'Trang phục',
            content: [
                {
                    subheader: 'Áo',
                    content: [
                        { title: 'Cổ', content: 'Need to find' },
                        { title: 'Kiểu dáng', content: 'Need to find' },
                        { title: 'Màu sắc', content: 'Need to find' },
                        { title: 'Chất liệu', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Quần',
                    content: [
                        { title: 'Kiểu dáng', content: 'Need to find' },
                        { title: 'Màu sắc', content: 'Need to find' },
                        { title: 'Chất liệu', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Áo khoác/Blazer',
                    content: [
                        { title: 'Kiểu dáng', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Suit',
                    content: [
                        { title: 'Kiểu dáng', content: 'Need to find' }
                    ]
                }
            ]
        },
        {
            header: 'Phụ kiện',
            content: [
                {
                    subheader: 'Giày',
                    content: [
                        { title: 'Giày', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Thắt lưng',
                    content: [
                        { title: 'Thắt lưng', content: 'Need to find' }
                    ]
                },
                {
                    subheader: 'Phụ kiện khác',
                    content: [
                        { title: 'Phụ kiện khác', content: 'Need to find' }
                    ]
                }
            ]
        }
    ];
    return processText(male_format,input);
    }
    
    function processText(format, input) {
        // Tách chuỗi input thành các dòng
        const lines = input.split('\n').map(line => line.trim());
        // Biến để theo dõi header hiện tại
        let currentHeader = null;
        let cnt = 0;
        // Duyệt qua từng dòng trong input
        for (const line of lines) {

            if (line === '"Trang phục' || line === 'Phụ kiện') {
                currentHeader = line;
                currentHeader = currentHeader.replace(/^"|"$/g, '');
            } else if (line.includes(':')) {
                cnt += 1;
                const [subheader, details] = [line.split(':', 2)[0].trim(),
                line.slice(line.indexOf(': ')).endsWith(";") ?
                    line.slice(line.indexOf(': ') + 2, line.length - 1).split(';').map(text => text.trim())

                    : line.slice(line.indexOf(': ') + 2).split(';').map(text => text.replace(/^"|"$/g, '').trim())];
                details.forEach(detail => {
                    const titleObj = format.find(obj => obj.header === currentHeader)
                        ?.content.find(sub => sub.subheader === subheader)
                        ?.content.find(titleObj => {
                            if (detail.split(':').length == 1) {
                                detail = titleObj.title + ': ' + detail;
                            }
                            return (titleObj.title === detail.split(':')[0].trim());
                        });
                    if (titleObj) {
                        titleObj.content = detail.split(':')[1].trim();
                    }
                });

            }
        }

        return format;
    }
}
export default standardizeText