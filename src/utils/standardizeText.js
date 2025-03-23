// function standardizeText(input, gender) {
//     // Khai báo cấu trúc format ban đầu với các giá trị đã xác định
//     if (gender =='female'){
//         const female_format = [
//         {
//             header: 'Trang phục',
//             content: [
//                 {
//                     subheader: 'Áo/váy',
//                     content: []
//                 },
//                 {
//                     subheader: 'Quần/Chân váy',
//                     content: []
//                 },
//                 {
//                     subheader: 'Áo khoác/Blazer',
//                     content: []
//                 },
//                 {
//                     subheader: 'Suit/Jumpsuit',
//                     content: []
//                 }
//             ]
//         },
//         {
//             header: 'Phụ kiện',
//             content: [
//                 {
//                     subheader: 'Giày',
//                     content: []
//                 },
//                 {
//                     subheader: 'Thắt lưng',
//                     content: []
//                 },
//                 {
//                     subheader: 'Phụ kiện khác',
//                     content: []
//                 }
//             ]
//         }
//     ];
//     return processText(female_format,input)
//     }
//     if (gender == 'male'){
//         const male_format = [
//             {
//             header: 'Trang phục',
//             content: [
//                 {
//                     subheader: 'Áo',
//                     content: []
//                 },
//                 {
//                     subheader: 'Quần',
//                     content: []
//                 },
//                 {
//                     subheader: 'Áo khoác/Blazer',
//                     content: []
//                 },
//                 {
//                     subheader: 'Suit',
//                     content: []
//                 }
//             ]
//         },
//         {
//             header: 'Phụ kiện',
//             content: [
//                 {
//                     subheader: 'Giày',
//                     content: []
//                 },
//                 {
//                     subheader: 'Thắt lưng',
//                     content: []
//                 },
//                 {
//                     subheader: 'Phụ kiện khác',
//                     content: []
//                 }
//             ]
//         }
//     ];
//     return processText(male_format,input);
//     }
    
//     function processText(format, input) {
//         // Tách chuỗi input thành các dòng
//         const lines = input.split('\n').map(line => line.trim());
//         // Biến để theo dõi header hiện tại
//         let currentHeader = null;
//         let cnt = 0;
//         // Duyệt qua từng dòng trong input
//         for (const line of lines) {
//             if (line === '"Trang phục' || line === 'Phụ kiện') {
//                 currentHeader = line;
//                 currentHeader = currentHeader.replace(/^"|"$/g, '');
//             } else if (line.includes(':')) {
//                 cnt += 1;
//                 const [subheader, details] = [line.split(':', 2)[0].trim(),
//                 line.slice(line.indexOf(': ')).endsWith(";") ?
//                     line.slice(line.indexOf(': ') + 2, line.length - 1).split(';').map(text => text.trim())

//                     : line.slice(line.indexOf(': ') + 2).split(';').map(text => text.replace(/^"|"$/g, '').trim())];
//                 // console.log(subheader)
//                 // console.log(details)
//                 details.forEach(detail => {
//                     console.log(detail)
//                     const titleObj = format.find(obj => obj.header === currentHeader)
//                         ?.content.find(sub => sub.subheader === subheader)
//                     if (titleObj) {
//                         titleObj.content.push(detail)
//                     }
//                 });

//             }
//         }

//         return format;
//     }
// }
// export default standardizeText

// // // const dataObj = standardizeText(input1,'male')
// // // const dataObj = standardizeText(input2,'male')
// // const dataObj = standardizeText(input3, 'female')
// // console.log('----------------------------------')
// // dataObj.map((section) =>{
// //     console.log(section.header)
// //     section.content.map((subsection) =>{
// //         console.log(subsection.subheader)
// //         subsection.content.map((item) =>{
// //             console.log(`${item.title}: ${item.content}`)
// //         })
// //     })
// // })
// function standardizeText(input, gender) {
//     // Khai báo cấu trúc format ban đầu với các giá trị đã xác định
//     if (gender =='female'){
//         const female_format = [
//         {
//             header: 'Trang phục',
//             content: [
//                 {
//                     subheader: 'Áo/váy',
//                     content: []
//                 },
//                 {
//                     subheader: 'Quần/Chân váy',
//                     content: []
//                 },
//                 {
//                     subheader: 'Áo khoác/Blazer',
//                     content: []
//                 },
//                 {
//                     subheader: 'Suit/Jumpsuit',
//                     content: []
//                 }
//             ]
//         },
//         {
//             header: 'Phụ kiện',
//             content: [
//                 {
//                     subheader: 'Giày',
//                     content: []
//                 },
//                 {
//                     subheader: 'Thắt lưng',
//                     content: []
//                 },
//                 {
//                     subheader: 'Phụ kiện khác',
//                     content: []
//                 }
//             ]
//         }
//     ];
//     return processText(female_format,input)
//     }
//     if (gender == 'male'){
//         const male_format = [
//             {
//             header: 'Trang phục',
//             content: [
//                 {
//                     subheader: 'Áo',
//                     content: []
//                 },
//                 {
//                     subheader: 'Quần',
//                     content: []
//                 },
//                 {
//                     subheader: 'Áo khoác/Blazer',
//                     content: []
//                 },
//                 {
//                     subheader: 'Suit',
//                     content: []
//                 }
//             ]
//         },
//         {
//             header: 'Phụ kiện',
//             content: [
//                 {
//                     subheader: 'Giày',
//                     content: []
//                 },
//                 {
//                     subheader: 'Thắt lưng',
//                     content: []
//                 },
//                 {
//                     subheader: 'Phụ kiện khác',
//                     content: []
//                 }
//             ]
//         }
//     ];
//     return processText(male_format,input);
//     }
    
//     function processText(format, input) {
//         // Tách chuỗi input thành các dòng
//         const lines = input.split('\n').map(line => line.trim());
//         // Biến để theo dõi header hiện tại
//         let currentHeader = null;
//         let cnt = 0;
//         // Duyệt qua từng dòng trong input
//         for (const line of lines) {
//             if (line === '"Trang phục' || line === 'Phụ kiện') {
//                 currentHeader = line;
//                 currentHeader = currentHeader.replace(/^"|"$/g, '');
//             } else if (line.includes(':')) {
//                 cnt += 1;
//                 const [subheader, details] = [line.split(':', 2)[0].trim(),
//                 line.slice(line.indexOf(': ')).endsWith(";") ?
//                     line.slice(line.indexOf(': ') + 2, line.length - 1).split(';').map(text => text.trim())

//                     : line.slice(line.indexOf(': ') + 2).split(';').map(text => text.replace(/^"|"$/g, '').trim())];
//                 // console.log(subheader)
//                 // console.log(details)
//                 details.forEach(detail => {
//                     const temp = []
//                     // console.log(detail)
//                     let txt = ""
//                     const titleObj = format.find(obj => obj.header === currentHeader)
//                         ?.content.find(sub => {
//                                 console.log(subheader)
//                             if (sub.subheader === subheader){
//                                 return true
//                             }
//                             else{
//                                 txt = subheader +": "+ detail+'/n'
//                                 return false    
//                             }
//                         })
//                     temp.push(txt)
//                     // console.log(temp)
//                     if (titleObj) {
//                         // console.log(detail)
//                         titleObj.content.push(detail)
//                         temp.map((item) => titleObj.content.push(item))
//                         // console.log(titleObj.content)
//                         console.log('------------')
//                     }
//                 });
//                 // console.log(temp)
//             }
//         }

//         return format;
//     }
// }
// export default standardizeText

// const input1 = "\"Trang phục\nÁo: Cổ chữ V, cổ tròn, tránh cổ lọ; Kiểu dáng: Vừa vặn, có thể có chi tiết ở vai, tránh quá rộng, bó sát; Màu sắc: Trung tính, có thể dùng màu lạnh hoặc ấm (tùy thích), tránh màu quá chói; Chất liệu: Cotton, linen, flannel, tránh bóng, quá cứng.\nQuần: Ống đứng, suông, cạp vừa, tránh skinny, bó sát, ống loe; Màu sắc: Trung tính, có thể đậm hoặc nhạt, tránh màu quá sáng; Chất liệu: Mềm mại, có độ rũ, tránh quá cứng, bóng.\nÁo khoác/Blazer: Dáng suông, có cầu vai nhẹ, tránh quá khổ, bomber ngắn, quá ôm; Màu sắc: Trung tính, có thể có họa tiết nhỏ, tránh họa tiết lớn.\nSuit: Cấu trúc, có cầu vai nhẹ, dáng suông, vừa vặn, tránh quá rộng, bó sát; Màu sắc: Xám, xanh navy, be, tránh đen tuyền.\nPhụ kiện\nGiày: Mũi tròn hoặc vuông, da lộn hoặc da thường, màu nâu, đen, tránh mũi nhọn, da bóng, quá nhiều chi tiết kim loại;\nThắt lưng: Bản vừa, da lộn hoặc da thường, màu nâu, đen, tránh da bóng, khóa lớn;\nPhụ kiện khác: Đồng hồ mặt vừa phải, dây da hoặc kim loại, cà vạt (tùy chọn), khăn quàng cổ (tùy chọn), tránh phụ kiện quá cầu kỳ, màu sắc lòe loẹt.\"\n"
// const input2 = "\"Trang phục\nÁo: Cổ chữ V, tránh cổ tròn, cổ lọ; Kiểu dáng: Vừa vặn, chi tiết dọc thân áo, tránh quá rộng, bó sát, họa tiết ngang; Màu sắc: Trung tính, tối màu, họa tiết nhỏ, sọc dọc, tránh màu sáng, họa tiết lớn; Chất liệu: Mềm mại, có độ rũ, tránh bóng, quá cứng.\nQuần: Ống đứng, suông, cạp vừa, tránh skinny, bó sát, ống loe, cạp trễ; Màu sắc: Tối màu, trung tính, tránh màu sáng; Chất liệu: Mềm mại, có độ rũ, tránh quá cứng, bóng.\nÁo khoác/Blazer: Dáng suông, ve áo nhỏ, một khuy, dài vừa phải, tránh độn vai quá nhiều, dáng hộp, hai hàng khuy, quá ngắn; Màu sắc: Tối màu, trung tính, tránh màu sáng.\nSuit: Dáng suông, ve áo nhỏ, một khuy, quần cạp vừa, tránh độn vai quá nhiều, dáng hộp, hai hàng khuy, quần ống côn; Màu sắc: Xám than, xanh navy đậm, tránh đen tuyền, màu sáng.\nPhụ kiện\nGiày: Mũi nhọn hoặc hơi vuông, da trơn, có độ cao vừa phải, màu tối, tránh mũi tròn, đế bệt, màu sáng;\nThắt lưng: Bản vừa, màu tối, tránh bản lớn, màu sáng, khóa to;\nPhụ kiện khác: Đồng hồ mặt nhỏ hoặc vừa, dây da tối màu, cà vạt trơn hoặc họa tiết nhỏ, tránh phụ kiện quá lớn, màu sáng, họa tiết nổi bật\"\n"
// const input3 = "\"Trang phục\nÁo/Váy: Cổ chữ V sâu, cổ đổ mềm mại, cổ vuông (vừa phải); Kiểu dáng: Nhấn eo cao (empire waist), dáng chữ A, xòe nhẹ từ eo, váy quấn (wrap dress), peplum nhẹ nhàng, tránh dáng suông rộng, oversized, quá ôm sát (đặc biệt ở phần trên), dáng hộp; Màu sắc: Màu trung tính (kem, be, xám nhạt), màu pastel (hồng pastel, xanh pastel, vàng pastel), màu đậm vừa phải (xanh navy, xanh rêu), ưu tiên màu tối hơn ở phần trên để thu gọn vai, màu sáng hơn ở phần dưới để tạo sự cân bằng, họa tiết nhỏ, sọc dọc nhỏ, họa tiết bất đối xứng (hướng sự chú ý xuống dưới), tránh màu quá sáng hoặc quá rực rỡ ở phần trên, màu nóng, họa tiết lớn tập trung ở vai hoặc ngực; Chất liệu: Mềm mại, rũ, có độ bóng mờ nhẹ (satin mờ, lụa cát, chiffon), voan, ren, cotton mềm mại, linen mềm, tweed mỏng, chất liệu có độ co giãn nhẹ sẽ thoải mái hơn, tránh chất liệu quá dày dặn, cứng cáp, thô ráp, quá bóng hoặc quá bắt sáng ở phần trên.\nQuần/Chân váy: Quần ống đứng, ống loe nhẹ, culottes (dáng chữ A), chân váy chữ A, chân váy bút chì (dài đến gối hoặc qua gối, nên chọn chất liệu mềm mại, không quá ôm sát), chân váy xòe vừa phải, chân váy xếp ly (ly nhỏ, mềm mại, xếp dọc), cạp cao, tránh quần skinny quá bó, quần ống rộng thùng thình, quần legging bóng, quần lửng ống rộng; Màu sắc: Màu trung tính, màu pastel, màu đậm vừa phải, họa tiết nhỏ, sọc dọc, họa tiết bất đối xứng, có thể chọn màu sáng hơn phần trên để tạo sự cân bằng, tránh màu quá sáng hoặc họa tiết lớn ở phần hông và đùi; Chất liệu: Mềm, rũ, co giãn nhẹ, chất liệu có độ đứng dáng vừa phải (như kaki mềm, denim mềm), tránh chất liệu quá cứng, thô, quá dày.\nÁo khoác/Blazer: Dáng lửng, chiết eo, blazer không cầu vai hoặc cầu vai mềm mại, áo khoác dáng chữ A, cardigan (dáng dài hoặc ngắn đều được, dáng dài giúp tạo đường thẳng đứng), áo khoác denim mềm mại vừa vặn, áo khoác da mềm vừa vặn, áo khoác dạ tweed vừa vặn, tránh áo khoác quá rộng, áo khoác độn vai quá cao, áo khoác dáng hộp cứng nhắc; Màu sắc: Màu trung tính, màu pastel, denim sáng màu, da thuộc màu trung tính, tweed màu trung tính, họa tiết kẻ sọc dọc nhỏ hoặc họa tiết chìm, tránh màu quá tối, màu quá nổi bật, họa tiết lớn ở phần trên áo khoác.\nSuit/Jumpsuit: Jumpsuit nhấn eo, quần ống đứng hoặc loe nhẹ, cổ chữ V sâu, tránh jumpsuit quá rộng hoặc quá ôm sát; Màu sắc: Màu trung tính, màu pastel, họa tiết nhỏ hoặc họa tiết chìm.\nPhụ kiện\nGiày: Giày cao gót (vừa phải, đế trụ hoặc đế xuồng, mũi nhọn hoặc mũi tròn nhẹ), sandal cao gót, giày màu nude, màu be, màu vàng ánh kim, màu da thuộc, giày màu sáng, tránh giày đế bệt quá thấp, giày bốt cổ ngắn quá to bản, giày có chi tiết trang trí quá lớn ở phần cổ chân;\nThắt lưng: Bản nhỏ hoặc vừa, nhấn eo, màu kim loại, màu da thuộc, màu trung tính, tránh thắt lưng bản quá to, thắt lưng màu nóng, thắt lưng quá nổi bật;\nPhụ kiện khác: Trang sức vàng, vàng hồng, bạc, ngọc trai, đá màu, khăn lụa họa tiết nhỏ, túi xách cỡ vừa, kính râm gọng mảnh.\"\n"
// const input4 = "\"Trang phục\nÁo/Váy: Cổ áo đa dạng (trừ cổ quá cao và kín); Kiểu dáng: Nhấn eo, chữ A, xòe, peplum, xếp ly, bèo nhún (tạo độ đầy đặn), có thể thêm chi tiết ở phần thân trên (túi, họa tiết, bèo...) để tạo cảm giác đầy đặn, tránh dáng suông, quá ôm.\nMàu sắc: Màu sáng, màu pastel (cả ấm và lạnh), màu trung tính (be, kem, trắng), họa tiết đa dạng (hoa nhí, chấm bi, kẻ sọc, hình học...), tránh màu quá tối ở thân dưới.\nChất liệu: Đa dạng, ưu tiên mềm mại, có độ phồng nhẹ (để tạo cảm giác đầy đặn), có thể thử chất liệu có kết cấu (tweed, len mỏng, dệt kim...).\nQuần/Chân váy: Quần ống đứng, ống loe, culottes, skinny (vừa phải), chân váy chữ A, chân váy xòe, xếp ly, bút chì (trên/ngang gối), cạp cao (kéo dài chân), có thể thử quần/váy có chi tiết trang trí (túi hộp, xếp ly, bèo...), tránh quần/váy quá rộng.\nMàu sắc: Màu sáng, màu trung tính, họa tiết đa dạng, tránh màu quá tối ở thân dưới.\nChất liệu: Đa dạng.\nÁo khoác/Blazer: Đa dạng, ưu tiên chiết eo, có cầu vai, có thể thử áo khoác họa tiết, kết cấu, tránh quá dài, quá rộng.\nMàu sắc: Màu sáng, màu pastel, màu trung tính, họa tiết.\nSuit/Jumpsuit: Nhấn eo, quần ống đa dạng (đứng, loe, skinny vừa), có thể thử jumpsuit có chi tiết trang trí, tránh quá rộng.\nMàu sắc: Màu sáng, pastel, trung tính, họa tiết.\nPhụ kiện\nGiày: Đa dạng (ưu tiên có gót, có thể thử búp bê, oxford, boots...), màu nude, sáng, ánh kim, có thể thử giày có họa tiết.\nThắt lưng: Đa dạng, nhấn eo, có thể thử thắt lưng bản nhỏ, kim loại, họa tiết...\nPhụ kiện khác: Trang sức vàng, bạc, vàng hồng, đá màu, khăn lụa (tạo điểm nhấn), túi (đa dạng, có thể thử túi họa tiết), kính.\"\n"
// // const dataObj = standardizeText(input1,'male')
// // const dataObj = standardizeText(input2,'male')
// const dataObj = standardizeText(input4, 'female')
// console.log('----------------------------------')
// dataObj.map((section) =>{
//     console.log(section.header)
//     section.content.map((subsection) =>{
//         console.log(subsection.subheader)
//         subsection.content.map((item) =>{
//             console.log(item)
//         })
//     })
// })
function standardizeText(input, gender) {
    // Khai báo cấu trúc format ban đầu
    if (gender === 'female') {
        const female_format = [
            {
                header: 'Trang phục',
                content: [
                    { subheader: 'Áo/váy', content: [] },
                    { subheader: 'Quần/Chân váy', content: [] },
                    { subheader: 'Áo khoác/Blazer', content: [] },
                    { subheader: 'Suit/Jumpsuit', content: [] }
                ]
            },
            {
                header: 'Phụ kiện',
                content: [
                    { subheader: 'Giày', content: [] },
                    { subheader: 'Thắt lưng', content: [] },
                    { subheader: 'Phụ kiện khác', content: [] }
                ]
            }
        ];
        return processText(female_format, input);
    }
    if (gender === 'male') {
        const male_format = [
            {
                header: 'Trang phục',
                content: [
                    { subheader: 'Áo', content: [] },
                    { subheader: 'Quần', content: [] },
                    { subheader: 'Áo khoác/Blazer', content: [] },
                    { subheader: 'Suit', content: [] }
                ]
            },
            {
                header: 'Phụ kiện',
                content: [
                    { subheader: 'Giày', content: [] },
                    { subheader: 'Thắt lưng', content: [] },
                    { subheader: 'Phụ kiện khác', content: [] }
                ]
            }
        ];
        return processText(male_format, input);
    }
}

function processText(format, input) {
    const lines = input.split('\n').map(line => line.trim());
    let currentHeader = null;
    let currentSubheader = null;

    for (const line of lines) {
        const cleanedLine = line.replace(/^"|"$/g, ''); // Loại bỏ dấu ngoặc kép

        // Kiểm tra header
        if (cleanedLine === 'Trang phục' || cleanedLine === 'Phụ kiện') {
            currentHeader = cleanedLine;
            currentSubheader = null; // Reset subheader khi chuyển header
            continue;
        }

        // Nếu dòng chứa ":", xử lý subheader hoặc chi tiết
        if (line.includes(':')) {
            const [sub, details] = [
                line.split(':', 2)[0].trim(),
                line.slice(line.indexOf(':') + 1).trim()
            ];
            const subLower = sub.toLowerCase();

            // Tìm header trong format
            const headerObj = format.find(obj => obj.header === currentHeader);
            if (headerObj) {
                // Kiểm tra xem sub có phải là subheader trong format không
                const subObj = headerObj.content.find(
                    sub => sub.subheader.toLowerCase() === subLower
                );

                if (subObj) {
                    // Nếu là subheader hợp lệ, cập nhật currentSubheader
                    currentSubheader = subObj;
                    const detailList = details.split(';').map(d => d.trim());
                    currentSubheader.content.push(...detailList);
                } else if (currentSubheader) {
                    // Nếu không phải subheader, thêm toàn bộ dòng vào currentSubheader
                    currentSubheader.content.push(line);
                }
            }
        }
    }

    return format;
}

export default standardizeText;

// const input4 = "\"Trang phục\nÁo/Váy: Cổ áo đa dạng (trừ cổ quá cao và kín); Kiểu dáng: Nhấn eo, chữ A, xòe, peplum, xếp ly, bèo nhún (tạo độ đầy đặn), có thể thêm chi tiết ở phần thân trên (túi, họa tiết, bèo...) để tạo cảm giác đầy đặn, tránh dáng suông, quá ôm.\nMàu sắc: Màu sáng, màu pastel (cả ấm và lạnh), màu trung tính (be, kem, trắng), họa tiết đa dạng (hoa nhí, chấm bi, kẻ sọc, hình học...), tránh màu quá tối ở thân dưới.\nChất liệu: Đa dạng, ưu tiên mềm mại, có độ phồng nhẹ (để tạo cảm giác đầy đặn), có thể thử chất liệu có kết cấu (tweed, len mỏng, dệt kim...).\nQuần/Chân váy: Quần ống đứng, ống loe, culottes, skinny (vừa phải), chân váy chữ A, chân váy xòe, xếp ly, bút chì (trên/ngang gối), cạp cao (kéo dài chân), có thể thử quần/váy có chi tiết trang trí (túi hộp, xếp ly, bèo...), tránh quần/váy quá rộng.\nMàu sắc: Màu sáng, màu trung tính, họa tiết đa dạng, tránh màu quá tối ở thân dưới.\nChất liệu: Đa dạng.\nÁo khoác/Blazer: Đa dạng, ưu tiên chiết eo, có cầu vai, có thể thử áo khoác họa tiết, kết cấu, tránh quá dài, quá rộng.\nMàu sắc: Màu sáng, màu pastel, màu trung tính, họa tiết.\nSuit/Jumpsuit: Nhấn eo, quần ống đa dạng (đứng, loe, skinny vừa), có thể thử jumpsuit có chi tiết trang trí, tránh quá rộng.\nMàu sắc: Màu sáng, pastel, trung tính, họa tiết.\nPhụ kiện\nGiày: Đa dạng (ưu tiên có gót, có thể thử búp bê, oxford, boots...), màu nude, sáng, ánh kim, có thể thử giày có họa tiết.\nThắt lưng: Đa dạng, nhấn eo, có thể thử thắt lưng bản nhỏ, kim loại, họa tiết...\nPhụ kiện khác: Trang sức vàng, bạc, vàng hồng, đá màu, khăn lụa (tạo điểm nhấn), túi (đa dạng, có thể thử túi họa tiết), kính.\"\n";
// const input5 = "\"Trang phục\nÁo/Váy: Cổ áo đa dạng (trừ cổ quá cao và kín); Kiểu dáng: Nhấn eo, chữ A, xòe, peplum, xếp ly, bèo nhún (tạo độ đầy đặn cho cơ thể), có thể thêm các chi tiết trang trí ở phần thân trên (túi, họa tiết, bèo nhún,...) để tạo cảm giác đầy đặn hơn, tránh dáng suông, quá ôm sát.\nMàu sắc: Màu sáng, màu pastel ấm (cam đào, vàng pastel, hồng san hô, xanh mint ấm), màu trung tính ấm (kem, be sáng, vàng nhạt), họa tiết đa dạng (hoa nhí, chấm bi, kẻ sọc, họa tiết hình học...), tránh màu quá tối ở thân dưới.\nChất liệu: Đa dạng, ưu tiên chất liệu mềm mại, có độ phồng nhẹ (để tạo cảm giác đầy đặn hơn), có thể thử nghiệm các chất liệu có kết cấu (tweed, len mỏng, dệt kim...).\nQuần/Chân váy: Quần ống đứng, ống loe, quần culottes, quần skinny (vừa phải), chân váy chữ A, chân váy xòe, chân váy xếp ly, chân váy bút chì (trên/ngang gối), cạp cao (giúp kéo dài chân), có thể thử nghiệm các kiểu quần/chân váy có chi tiết trang trí (túi hộp, xếp ly, bèo nhún...), tránh quần/chân váy quá rộng.\nMàu sắc: Màu sáng, màu trung tính ấm, họa tiết đa dạng (hoa nhí, chấm bi, kẻ sọc, họa tiết hình học...), tránh màu quá tối ở thân dưới.\nChất liệu: Đa dạng chất liệu.\nÁo khoác/Blazer: Kiểu dáng đa dạng, ưu tiên dáng chiết eo, có cầu vai (để tạo form dáng), có thể thử nghiệm các kiểu áo khoác có họa tiết, kết cấu (tweed, len...), tránh áo khoác quá dài, quá rộng.\nMàu sắc: Màu sáng, màu pastel ấm, màu trung tính ấm, họa tiết (nếu thích).\nSuit/Jumpsuit: Jumpsuit nhấn eo, quần ống đa dạng (ống đứng, ống loe, skinny vừa phải), có thể thử nghiệm các kiểu jumpsuit có chi tiết trang trí (túi, xếp ly, bèo nhún...), tránh jumpsuit quá rộng.\nMàu sắc: Màu sáng, màu pastel ấm, màu trung tính ấm, họa tiết (nếu thích).\nPhụ kiện\nGiày: Đa dạng kiểu dáng (ưu tiên giày có gót, có thể thử nghiệm giày búp bê, giày oxford, boots...), màu nude, màu be, màu vàng ánh kim, màu da thuộc, có thể thử nghiệm giày có họa tiết, màu sắc nổi bật.\nThắt lưng: Đa dạng kiểu dáng, nhấn eo, có thể thử nghiệm thắt lưng bản nhỏ, thắt lưng da thuộc, thắt lưng vàng ánh kim, thắt lưng họa tiết...\nPhụ kiện khác: Trang sức vàng, vàng hồng, ngọc trai, đá màu ấm, khăn lụa họa tiết (có thể dùng để tạo điểm nhấn ở cổ, tay...), túi xách (đa dạng kích cỡ, có thể thử nghiệm túi có họa tiết, màu sắc nổi bật...), kính râm.\"\n"
// const dataObj = standardizeText(input5, 'female');
// console.log('----------------------------------');
// dataObj.forEach((section) => {
//     console.log(section.header);
//     section.content.forEach((subsection) => {
//         console.log(subsection.subheader);
//         subsection.content.forEach((item) => {
//             console.log(item);
//         });
//     });
// });