export const students = [
    {
      type: "高中（国内）毕业",
      image_path: require("../resources/images/china-high-school.jpg")
    },{
      type: "高中（国内）在读",
      image_path: require("../resources/images/china-high-school.jpg")
    },{
      type: "国际高中（国内）毕业",
      image_path: require("../resources/images/china-international-school.jpg")
    },{
      type: "国际高中（国内）在读",
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
    studentTypes: {
      title: "本科准备资料模板",
      body: "点选学生类型，查看该类学生需要提交的申请资料"
    },
    documentList: {
      title: "准备资料清单",
      body: "选择学生类型："
    }
  }
  

  export const documents = {
    docArray: [
        [{
            pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-high-school/completed/gaokao-transcript.pdf",
            pdfName: "gaokao-transcript-china-high-school",
            pdfNameCN: "高考成绩单",
            numPages: 2,
          },{
            pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-high-school/completed/gaokao-transcript-certificate.pdf",
            pdfName: "gaokao-transcript-certificate-china-high-school",
            pdfNameCN: "高考成绩单和公证及翻译",
            numPages: 5,
          },{
            pdfNameCN: "语言成绩（雅思或PTE）",
          },{
            pdfNameCN: "护照",
          }
        ],
        [{
          pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-high-school/not-completed/high-school-grades.pdf",
          pdfName: "high-school-grades-china-high-school",
          pdfNameCN: "高中平时成绩（中文+英文）",
          numPages: 1,
        },{
          pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-high-school/not-completed/enrollment-certificate.pdf",
          pdfName: "enrollment-certificate-china-high-school",
          pdfNameCN: "在读证明",
          numPages: 2,
        },{
          pdfNameCN: "语言成绩（雅思或PTE）",
        },{
          pdfNameCN: "护照",
        }
      ],
      [{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-international-high-school/completed/a-level-transcript.pdf",
        pdfName: "a-level-transcript-china-international-school",
        pdfNameCN: "A-Level或等同成绩",
        numPages: 5,
      },{
        pdfNameCN: "语言成绩（雅思或PTE）",
      },{
        pdfNameCN: "护照",
      }
      ],
      [{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-international-high-school/not-completed/a-level-equivalent.pdf",
        pdfName: "a-level-equivalent-china-international-school",
        pdfNameCN: "A-Level或等同成绩",
        numPages: 1,
      },{
        pdfNameCN: "O-Level或等同成绩",
      },{
        pdfNameCN: "语言成绩（雅思或PTE）",
      },{
        pdfNameCN: "护照",
      }
      ],
      [{
          pdfNameCN: "UAC申请步骤及攻略",
        }
      ],
      [{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/australia-university-foundation/high-school-grades.pdf",
        pdfName: "high-school-grades-australia-university-foundation",
        pdfNameCN: "高中成绩",
        numPages: 1,
      },{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/australia-university-foundation/foundation-transcript.pdf",
        pdfName: "foundation-transcript-australia-university-foundation",
        pdfNameCN: "预科成绩",
        numPages: 1,
      },{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/australia-university-foundation/foundation-graduation-certificate.pdf",
        pdfName: "foundation-graduation-certificate-australia-university-foundation",
        pdfNameCN: "预科毕业证书或完成信",
        numPages: 1,
      },{
        pdfNameCN: "语言成绩（雅思或PTE）",
      },{
        pdfNameCN: "预科及配套课程COE",
      },{
        pdfNameCN: "签证信",
      },{
        pdfNameCN: "护照",
      }
      ],
      [{
        pdfNameCN: "前五个学期成绩",
      },{
        pdfNameCN: "GPA算法及评分系统说明",
      },{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/singapore-poly/not+completed/enrollment-certificate.pdf",
        pdfName: "enrollment-certificate-singapore-poly",
        pdfNameCN: "在读证明（强调英文是唯一教学语言）",
        numPages: 1,
      },{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/singapore-poly/not+completed/syllabus.pdf",
        pdfName: "syllabus-singapore-poly-not-completed",
        pdfNameCN: "课程大纲（要求免课）",
        numPages: 6,
      },{
        pdfNameCN: "护照",
      }
      ],
      [{
        pdfNameCN: "Poly成绩单",
      },{
        pdfNameCN: "GPA算法及评分系统说明",
      },{
        pdfNameCN: "毕业证书或完成信（强调英文是唯一教学语言）",
      },{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/singapore-poly/completed/syllabus.pdf",
        pdfName: "syllabus-singapore-poly-completed",
        pdfNameCN: "课程大纲（要求免课）",
        numPages: 6,
      },{
        pdfNameCN: "护照",
      }
      ],
      [{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-university-transfer/gaokao-transcript.pdf",
        pdfName: "gaokao-transcript-china-university-transfer",
        pdfNameCN: "高考成绩",
        numPages: 2,
      },{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-university-transfer/gaokao-transcript-certificate.pdf",
        pdfName: "gaokao-transcript-certificate-china-university-transfer",
        pdfNameCN: "高考成绩公证及翻译",
        numPages: 5,
        
      },{
        pdfNameCN: "大学已有成绩（中文+英文）",
      },{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/china-university-transfer/transcript-information.pdf",
        pdfName: "transcript-information-china-university-transfer",
        pdfNameCN: "大学成绩评分系统说明",
        numPages: 1,
      },{
        pdfNameCN: "语言成绩（雅思或PTE）",
      },{
        pdfNameCN: "护照",
      }
      ],
      [{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/australia-university-transfer/hsc-transcript.pdf",
        pdfName: "hsc-transcript-australia-university-transfer",
        pdfNameCN: "HSC+ATAR成绩或预科成绩",
        numPages: 8,
      },{
        pdfNameCN: "大学已有成绩（中文+英文）",
      },{
        pdfUrl: "https://bangbang-doco.s3-ap-southeast-2.amazonaws.com/Bachelor/australia-university-transfer/transcript-information.pdf",
        pdfName: "transcript-information-australia-university-transfer",
        pdfNameCN: "大学成绩评分系统说明",
        numPages: 1,
      },{
        pdfNameCN: "课程大纲（要求免课）",
      },{
        pdfNameCN: "护照",
      }
      ]
    ] 
  }
  