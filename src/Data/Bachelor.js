export const students = [
    {
      type: "高中（国内）毕业",
      image_path: require("../resources/images/china-high-school.jpg")
    },{
      type: "高中（国内）未毕业",
      image_path: require("../resources/images/china-high-school.jpg")
    },{
      type: "国际高中（国内）毕业",
      image_path: require("../resources/images/china-international-school.jpg")
    },{
      type: "国际高中（国内）未毕业",
      image_path: require("../resources/images/china-international-school.jpg")
    },{
      type: "高中（澳洲）",
      description: "UAC填志愿",
      image_path: require("../resources/images/australia-high-school.jpg")
    },{
      type: "预科（澳洲）",
      description: "预科未过申请新学校",
      image_path: require("../resources/images/australia-university-foundation.jpg")
    },{
      type: "理工学院（新加坡）在读",
      image_path: require("../resources/images/singapore-poly.jpg")
    },{
      type: "理工学院（新加坡）毕业",
      image_path: require("../resources/images/singapore-poly.jpg")
    },{
      type: "转校-国内本科在读",
      image_path: require("../resources/images/china-university-transfer.jpg")
    }, {
      type: "转校-澳洲本科在读",
      image_path: require("../resources/images/australia-university-transfer.jpg")
    }];
  
  export const header = {
    title: "本科准备资料模板",
    body: "点选学生类型，查看该类学生需要提交的申请资料"
  }

  export const documents = {
    A: [
        {
          pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-high-school/completed/gaokao-transcript.pdf",
          pdfName: "gaokao-transcript",
          pdfNameCN: "高考成绩单",
          numPages: 2
        },{
          pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-high-school/completed/gaokao-transcript-certificate.pdf",
          pdfName: "gaokao-transcript-certificate",
          pdfNameCN: "高考成绩单和公证及翻译",
          numPages: 5
        },{
          pdfNameCN: "语言成绩（雅思或PTE）",
        },{
          pdfNameCN: "护照",
        }
    ]
  }
  