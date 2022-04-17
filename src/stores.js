import create from 'zustand';

const details = (set, get) => ({
  allProducts: [],
  setAllProducts: (data) => set({ allProducts: data }),
  productDetails: [],
  setProductDetails: (data) => set({ productDetails: data }),
  styles: [],
  setStyles: (data) => set({ styles: data }),
  selectedStyle: {}, // will be the style object
  setSelectedStyle: (data) => set({ selectedStyle: data }),
  selectedSize: '',
  setSelectedSize: (data) => set({ selectedSize: data }),
  selectedQuantity: '1',
  setSelectedQuantity: (data) => set({ selectedQuantity: data }),
  startingThumbnailIndex: 0,
  setStartingThumbnailIndex: (data) => set({ startingThumbnailIndex: data }),
  selectedImageIndex: 0,
  setSelectedImageIndex: (newIndex) => set({ selectedImageIndex: newIndex }),
  imageZoomed: false,
  toggleImageZoomed: (bool) => {
    if (bool === undefined) {
      set({ imageZoomed: !get().imageZoomed });
    } else {
      set({ imageZoomed: bool });
    }
  },
});
const detailStore = create((details));

const questionsStore = create(
  ((set) => ({
    questions: [],
    setQuestions: (data) => set(() => ({ questions: data })),
    answers: [],
    setAnswers: (data) => set(() => ({ answers: data })),
    wasHelpful: [],
    addHelpful: (question) => set((state) => ({
      wasHelpful: [
        question, ...state.wasHelpful,
      ],
    })),
    wasHelpfulAnswer: [],
    addHelpfulAnswer: (answer) => set((state) => ({
      wasHelpfulAnswer: [
        answer, ...state.wasHelpfulAnswer,
      ],
    })),
    maxQuestions: 4,
    setMaxQuestions: () => set((state) => ({
      maxQuestions: state.questions.length,
    })),
    maxAnswersArr: [],
    setMaxAnswersArr: (answerArr) => set(() => ({
      maxAnswersArr: answerArr,
    })),
    questionModalToggle: false,
    setQuestionModalToggle: () => set((state) => ({
      questionModalToggle: !state.questionModalToggle,
    })),
    answerModalToggle: false,
    setAnswerModalToggle: () => set((state) => ({
      answerModalToggle: !state.answerModalToggle,
    })),
  })),
);

const testRatings = {
  product_id: '66642',
  ratings: {
    2: '2',
    3: '11',
    4: '3',
    5: '12',
  },
  recommended: {
    false: '7',
    true: '21',
  },
  characteristics: {
    Fit: {
      id: 223572,
      value: '2.0000000000000000',
    },
    Length: {
      id: 223573,
      value: '2.1851851851851852',
    },
    Comfort: {
      id: 223574,
      value: '2.0740740740740741',
    },
    Quality: {
      id: 223575,
      value: '2.2962962962962963',
    },
  },
};

const testReviews = {
  product: '66741',
  page: 0,
  count: 50,
  results: [
    {
      review_id: 1157610,
      rating: 4,
      summary: 'Minus molestiae architecto voluptatem consequatur.',
      recommend: true,
      response: null,
      body: 'Nihil laborum sit pariatur magni sit alias sunt. Earum explicabo nobis quis quasi nesciunt animi at pariatur repellendus. Porro id enim qui vitae quia numquam. Debitis sit et eos enim aut et autem molestias. Saepe voluptas ut est ipsum libero.',
      date: '2022-03-27T00:00:00.000Z',
      reviewer_name: 'Avis_Gibson41',
      helpfulness: 27,
      photos: [
        {
          id: 2255289,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255290,
          url: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 1157627,
      rating: 1,
      summary: 'Officia enim qui saepe itaque distinctio suscipit.',
      recommend: false,
      response: null,
      body: 'Ut aliquam repellendus quo molestiae maxime iusto error. Ut sit magnam voluptate rerum non. Consequatur iste earum aspernatur. Voluptates asperiores sint unde voluptatem earum eos perspiciatis quas.',
      date: '2022-02-18T00:00:00.000Z',
      reviewer_name: 'Dixie.Kihn',
      helpfulness: 6,
      photos: [
        {
          id: 2255249,
          url: 'https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80',
        },
        {
          id: 2255250,
          url: 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
      ],
    },
    {
      review_id: 1157624,
      rating: 3,
      summary: 'Mollitia expedita cumque accusamus tenetur veritatis est quia qui.',
      recommend: true,
      response: null,
      body: 'Labore et rerum porro quo aut sequi. Quaerat pariatur sapiente repellat dolorem quis repellat. Vel vel exercitationem error est ut repudiandae totam voluptas consequuntur.',
      date: '2022-01-21T00:00:00.000Z',
      reviewer_name: 'Tyson.Flatley84',
      helpfulness: 10,
      photos: [
        {
          id: 2255257,
          url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255258,
          url: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157618,
      rating: 1,
      summary: 'Sapiente dicta cumque quia ab et autem.',
      recommend: false,
      response: null,
      body: 'Eum eligendi accusamus. Aut voluptatem maxime error sit suscipit. Repudiandae consectetur perferendis aut ut reprehenderit est inventore deleniti vel.',
      date: '2021-12-13T00:00:00.000Z',
      reviewer_name: 'Lorna15',
      helpfulness: 10,
      photos: [
        {
          id: 2255270,
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 2255271,
          url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157619,
      rating: 4,
      summary: 'Est illum illum cupiditate quos aliquam vel quia quasi.',
      recommend: true,
      response: '"Aspernatur tempore dolores vel et necessitatibus atque et."',
      body: 'Eligendi qui qui veniam id dolorem odio sit. Sit saepe soluta nam delectus ex est perspiciatis ut voluptas. Ab error reprehenderit minima dolorem dolor voluptate minima dolores. Animi occaecati est temporibus corrupti officiis quos.',
      date: '2021-12-11T00:00:00.000Z',
      reviewer_name: 'Garfield.Homenick10',
      helpfulness: 21,
      photos: [
        {
          id: 2255269,
          url: 'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157616,
      rating: 2,
      summary: 'Et assumenda repellat suscipit.',
      recommend: true,
      response: null,
      body: 'Inventore sint in recusandae. Enim asperiores facere quod. Rem iste ex placeat dicta error dolorem incidunt. Neque dolor consequatur nulla.',
      date: '2021-12-10T00:00:00.000Z',
      reviewer_name: 'Dortha_Runte23',
      helpfulness: 27,
      photos: [
        {
          id: 2255275,
          url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255276,
          url: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255277,
          url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157626,
      rating: 5,
      summary: 'Est magnam ipsum laboriosam nihil deserunt molestias doloribus repudiandae.',
      recommend: true,
      response: null,
      body: 'Optio et ad velit expedita laboriosam ex. Voluptatem minus voluptatem at nobis neque iusto ut. Esse deserunt commodi ex ex minima fugiat officiis sit. Itaque voluptatem distinctio quos non deserunt eligendi.',
      date: '2021-11-18T00:00:00.000Z',
      reviewer_name: 'Lysanne_Windler',
      helpfulness: 13,
      photos: [
        {
          id: 2255251,
          url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255252,
          url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255253,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157625,
      rating: 1,
      summary: 'Quidem optio fugit quo et.',
      recommend: false,
      response: null,
      body: 'Nisi autem velit dolores itaque voluptas laboriosam veritatis est porro. Et omnis ipsa eum dolore facere. Aliquid corrupti perspiciatis est quos. Dolor vel quae dolorum voluptatum itaque. Mollitia est velit asperiores beatae illo dicta id.',
      date: '2021-09-20T00:00:00.000Z',
      reviewer_name: 'Dayton_Glover',
      helpfulness: 14,
      photos: [
        {
          id: 2255254,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255255,
          url: 'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255256,
          url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157612,
      rating: 5,
      summary: 'Voluptatem consequatur assumenda possimus fugit magni voluptatem fugit minima.',
      recommend: true,
      response: null,
      body: 'Cupiditate repellendus adipisci aspernatur deleniti et. Doloribus labore assumenda cum doloribus. Qui sunt temporibus sed.',
      date: '2021-09-14T00:00:00.000Z',
      reviewer_name: 'Spencer.Hammes',
      helpfulness: 17,
      photos: [
        {
          id: 2255284,
          url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255285,
          url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
        },
      ],
    },
    {
      review_id: 1157615,
      rating: 3,
      summary: 'Qui eum quasi.',
      recommend: true,
      response: null,
      body: 'Unde quod nihil. Incidunt consequuntur veniam natus. Minus alias in eaque eius. Maiores eaque illum. Aut cupiditate reprehenderit porro.',
      date: '2021-09-10T00:00:00.000Z',
      reviewer_name: 'Newton.Bashirian63',
      helpfulness: 23,
      photos: [
        {
          id: 2255278,
          url: 'https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255279,
          url: 'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
      ],
    },
    {
      review_id: 1157623,
      rating: 1,
      summary: 'Veniam enim numquam.',
      recommend: false,
      response: null,
      body: 'Aperiam accusamus et nesciunt excepturi eum mollitia et pariatur. Voluptatum ab totam temporibus. Voluptas sint fugiat.',
      date: '2021-07-14T00:00:00.000Z',
      reviewer_name: 'Jana76',
      helpfulness: 2,
      photos: [
        {
          id: 2255259,
          url: 'https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255260,
          url: 'https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80',
        },
        {
          id: 2255261,
          url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
        },
      ],
    },
    {
      review_id: 1157617,
      rating: 1,
      summary: 'Et quisquam nam sunt est est ipsam eos nostrum est.',
      recommend: false,
      response: null,
      body: 'Dolor quo illo in incidunt voluptas fugiat. Ut mollitia possimus autem. Facilis commodi fugiat voluptas laudantium reprehenderit. Laudantium magnam laborum. Excepturi consequatur nulla enim ea consequatur sunt neque officiis sunt.',
      date: '2021-05-31T00:00:00.000Z',
      reviewer_name: 'Aliyah33',
      helpfulness: 29,
      photos: [
        {
          id: 2255272,
          url: 'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
        {
          id: 2255273,
          url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255274,
          url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 1157622,
      rating: 3,
      summary: 'Placeat ut omnis at et ullam beatae.',
      recommend: true,
      response: null,
      body: 'Dolor ad aperiam nihil possimus. Est facere molestiae aliquid. Facere iure quia aut labore id aut rerum aperiam quo. Iusto est quia nisi. Id id porro accusamus et libero dolorum. Neque eveniet ipsum.',
      date: '2021-05-17T00:00:00.000Z',
      reviewer_name: 'Aditya.Leuschke',
      helpfulness: 5,
      photos: [
        {
          id: 2255262,
          url: 'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255263,
          url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
        },
        {
          id: 2255264,
          url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
        },
      ],
    },
    {
      review_id: 1157620,
      rating: 5,
      summary: 'Maxime ipsum aliquid et aut perferendis suscipit blanditiis et reprehenderit.',
      recommend: true,
      response: null,
      body: 'Dolores adipisci dolores ipsum sit in. Odio cum aliquam. Tempora ipsum exercitationem consectetur. Est fugit cum ut quibusdam earum et praesentium nobis quisquam.',
      date: '2021-05-12T00:00:00.000Z',
      reviewer_name: 'Taryn18',
      helpfulness: 20,
      photos: [
        {
          id: 2255266,
          url: 'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255267,
          url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255268,
          url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157613,
      rating: 5,
      summary: 'Sunt sed dolor vitae aliquid dolores temporibus.',
      recommend: true,
      response: null,
      body: 'Laudantium veniam dolores odio asperiores vero. Dolorum distinctio nemo sapiente vel rerum dolorum. Odio et non et. Cum atque eum possimus voluptatem non. Illum enim dicta atque rem numquam quaerat. Harum est et alias soluta velit molestiae facere iure nemo.',
      date: '2021-05-10T00:00:00.000Z',
      reviewer_name: 'Otto_Leannon56',
      helpfulness: 28,
      photos: [
        {
          id: 2255281,
          url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
        {
          id: 2255282,
          url: 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
        },
        {
          id: 2255283,
          url: 'https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80',
        },
      ],
    },
    {
      review_id: 1157614,
      rating: 4,
      summary: 'Voluptatum nobis deleniti est.',
      recommend: true,
      response: null,
      body: 'Aut dolorem minima inventore ut eos quisquam sed voluptas. Quia tempora voluptas rem eaque modi natus totam nisi. Minus at deleniti quae neque in eos quis.',
      date: '2021-05-04T00:00:00.000Z',
      reviewer_name: 'Stefan91',
      helpfulness: 18,
      photos: [
        {
          id: 2255280,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
    },
    {
      review_id: 1157611,
      rating: 2,
      summary: 'Eligendi reiciendis eligendi animi est consequuntur aspernatur enim officia sit.',
      recommend: true,
      response: null,
      body: 'Ea ratione excepturi nihil perferendis perferendis quas quo. Sunt qui iste ratione facilis architecto. Mollitia ipsam ut et sit assumenda harum perferendis nam. Assumenda assumenda nisi autem fugiat vero id. Incidunt inventore dolores.',
      date: '2021-04-16T00:00:00.000Z',
      reviewer_name: 'Micheal39',
      helpfulness: 3,
      photos: [
        {
          id: 2255286,
          url: 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
        {
          id: 2255287,
          url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255288,
          url: 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
      ],
    },
    {
      review_id: 1157609,
      rating: 4,
      summary: 'At consequuntur est dolorum soluta dolorem voluptatem.',
      recommend: true,
      response: null,
      body: 'Praesentium alias modi eaque odit facere et qui numquam ea. Voluptatem voluptates veniam sed et voluptatem similique pariatur voluptatem sequi. Totam accusamus autem in harum sed cupiditate. Nihil mollitia excepturi facilis laboriosam ratione. Voluptatem praesentium illum accusantium eos commodi consequatur. Aut esse et eaque dolores pariatur nobis.',
      date: '2021-04-09T00:00:00.000Z',
      reviewer_name: 'Adelia26',
      helpfulness: 9,
      photos: [
        {
          id: 2255291,
          url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
        },
        {
          id: 2255292,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
    },
  ],
};

const testNewestReviews = {
  product: '66741',
  page: 0,
  count: 50,
  results: [
    {
      review_id: 1157610,
      rating: 4,
      summary: 'Minus molestiae architecto voluptatem consequatur.',
      recommend: true,
      response: null,
      body: 'Nihil laborum sit pariatur magni sit alias sunt. Earum explicabo nobis quis quasi nesciunt animi at pariatur repellendus. Porro id enim qui vitae quia numquam. Debitis sit et eos enim aut et autem molestias. Saepe voluptas ut est ipsum libero.',
      date: '2022-03-27T00:00:00.000Z',
      reviewer_name: 'Avis_Gibson41',
      helpfulness: 27,
      photos: [
        {
          id: 2255289,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255290,
          url: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 1157627,
      rating: 1,
      summary: 'Officia enim qui saepe itaque distinctio suscipit.',
      recommend: false,
      response: null,
      body: 'Ut aliquam repellendus quo molestiae maxime iusto error. Ut sit magnam voluptate rerum non. Consequatur iste earum aspernatur. Voluptates asperiores sint unde voluptatem earum eos perspiciatis quas.',
      date: '2022-02-18T00:00:00.000Z',
      reviewer_name: 'Dixie.Kihn',
      helpfulness: 6,
      photos: [
        {
          id: 2255249,
          url: 'https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80',
        },
        {
          id: 2255250,
          url: 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
      ],
    },
    {
      review_id: 1157624,
      rating: 3,
      summary: 'Mollitia expedita cumque accusamus tenetur veritatis est quia qui.',
      recommend: true,
      response: null,
      body: 'Labore et rerum porro quo aut sequi. Quaerat pariatur sapiente repellat dolorem quis repellat. Vel vel exercitationem error est ut repudiandae totam voluptas consequuntur.',
      date: '2022-01-21T00:00:00.000Z',
      reviewer_name: 'Tyson.Flatley84',
      helpfulness: 10,
      photos: [
        {
          id: 2255257,
          url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255258,
          url: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157618,
      rating: 1,
      summary: 'Sapiente dicta cumque quia ab et autem.',
      recommend: false,
      response: null,
      body: 'Eum eligendi accusamus. Aut voluptatem maxime error sit suscipit. Repudiandae consectetur perferendis aut ut reprehenderit est inventore deleniti vel.',
      date: '2021-12-13T00:00:00.000Z',
      reviewer_name: 'Lorna15',
      helpfulness: 10,
      photos: [
        {
          id: 2255270,
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 2255271,
          url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157619,
      rating: 4,
      summary: 'Est illum illum cupiditate quos aliquam vel quia quasi.',
      recommend: true,
      response: '"Aspernatur tempore dolores vel et necessitatibus atque et."',
      body: 'Eligendi qui qui veniam id dolorem odio sit. Sit saepe soluta nam delectus ex est perspiciatis ut voluptas. Ab error reprehenderit minima dolorem dolor voluptate minima dolores. Animi occaecati est temporibus corrupti officiis quos.',
      date: '2021-12-11T00:00:00.000Z',
      reviewer_name: 'Garfield.Homenick10',
      helpfulness: 21,
      photos: [
        {
          id: 2255269,
          url: 'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157616,
      rating: 2,
      summary: 'Et assumenda repellat suscipit.',
      recommend: true,
      response: null,
      body: 'Inventore sint in recusandae. Enim asperiores facere quod. Rem iste ex placeat dicta error dolorem incidunt. Neque dolor consequatur nulla.',
      date: '2021-12-10T00:00:00.000Z',
      reviewer_name: 'Dortha_Runte23',
      helpfulness: 27,
      photos: [
        {
          id: 2255275,
          url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255276,
          url: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255277,
          url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157626,
      rating: 5,
      summary: 'Est magnam ipsum laboriosam nihil deserunt molestias doloribus repudiandae.',
      recommend: true,
      response: null,
      body: 'Optio et ad velit expedita laboriosam ex. Voluptatem minus voluptatem at nobis neque iusto ut. Esse deserunt commodi ex ex minima fugiat officiis sit. Itaque voluptatem distinctio quos non deserunt eligendi.',
      date: '2021-11-18T00:00:00.000Z',
      reviewer_name: 'Lysanne_Windler',
      helpfulness: 13,
      photos: [
        {
          id: 2255251,
          url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255252,
          url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255253,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157625,
      rating: 1,
      summary: 'Quidem optio fugit quo et.',
      recommend: false,
      response: null,
      body: 'Nisi autem velit dolores itaque voluptas laboriosam veritatis est porro. Et omnis ipsa eum dolore facere. Aliquid corrupti perspiciatis est quos. Dolor vel quae dolorum voluptatum itaque. Mollitia est velit asperiores beatae illo dicta id.',
      date: '2021-09-20T00:00:00.000Z',
      reviewer_name: 'Dayton_Glover',
      helpfulness: 14,
      photos: [
        {
          id: 2255254,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255255,
          url: 'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255256,
          url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157612,
      rating: 5,
      summary: 'Voluptatem consequatur assumenda possimus fugit magni voluptatem fugit minima.',
      recommend: true,
      response: null,
      body: 'Cupiditate repellendus adipisci aspernatur deleniti et. Doloribus labore assumenda cum doloribus. Qui sunt temporibus sed.',
      date: '2021-09-14T00:00:00.000Z',
      reviewer_name: 'Spencer.Hammes',
      helpfulness: 17,
      photos: [
        {
          id: 2255284,
          url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255285,
          url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
        },
      ],
    },
    {
      review_id: 1157615,
      rating: 3,
      summary: 'Qui eum quasi.',
      recommend: true,
      response: null,
      body: 'Unde quod nihil. Incidunt consequuntur veniam natus. Minus alias in eaque eius. Maiores eaque illum. Aut cupiditate reprehenderit porro.',
      date: '2021-09-10T00:00:00.000Z',
      reviewer_name: 'Newton.Bashirian63',
      helpfulness: 23,
      photos: [
        {
          id: 2255278,
          url: 'https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255279,
          url: 'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
      ],
    },
    {
      review_id: 1157623,
      rating: 1,
      summary: 'Veniam enim numquam.',
      recommend: false,
      response: null,
      body: 'Aperiam accusamus et nesciunt excepturi eum mollitia et pariatur. Voluptatum ab totam temporibus. Voluptas sint fugiat.',
      date: '2021-07-14T00:00:00.000Z',
      reviewer_name: 'Jana76',
      helpfulness: 2,
      photos: [
        {
          id: 2255259,
          url: 'https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255260,
          url: 'https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80',
        },
        {
          id: 2255261,
          url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
        },
      ],
    },
    {
      review_id: 1157617,
      rating: 1,
      summary: 'Et quisquam nam sunt est est ipsam eos nostrum est.',
      recommend: false,
      response: null,
      body: 'Dolor quo illo in incidunt voluptas fugiat. Ut mollitia possimus autem. Facilis commodi fugiat voluptas laudantium reprehenderit. Laudantium magnam laborum. Excepturi consequatur nulla enim ea consequatur sunt neque officiis sunt.',
      date: '2021-05-31T00:00:00.000Z',
      reviewer_name: 'Aliyah33',
      helpfulness: 29,
      photos: [
        {
          id: 2255272,
          url: 'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
        {
          id: 2255273,
          url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255274,
          url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 1157622,
      rating: 3,
      summary: 'Placeat ut omnis at et ullam beatae.',
      recommend: true,
      response: null,
      body: 'Dolor ad aperiam nihil possimus. Est facere molestiae aliquid. Facere iure quia aut labore id aut rerum aperiam quo. Iusto est quia nisi. Id id porro accusamus et libero dolorum. Neque eveniet ipsum.',
      date: '2021-05-17T00:00:00.000Z',
      reviewer_name: 'Aditya.Leuschke',
      helpfulness: 5,
      photos: [
        {
          id: 2255262,
          url: 'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255263,
          url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
        },
        {
          id: 2255264,
          url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
        },
      ],
    },
    {
      review_id: 1157620,
      rating: 5,
      summary: 'Maxime ipsum aliquid et aut perferendis suscipit blanditiis et reprehenderit.',
      recommend: true,
      response: null,
      body: 'Dolores adipisci dolores ipsum sit in. Odio cum aliquam. Tempora ipsum exercitationem consectetur. Est fugit cum ut quibusdam earum et praesentium nobis quisquam.',
      date: '2021-05-12T00:00:00.000Z',
      reviewer_name: 'Taryn18',
      helpfulness: 20,
      photos: [
        {
          id: 2255266,
          url: 'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255267,
          url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255268,
          url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157613,
      rating: 5,
      summary: 'Sunt sed dolor vitae aliquid dolores temporibus.',
      recommend: true,
      response: null,
      body: 'Laudantium veniam dolores odio asperiores vero. Dolorum distinctio nemo sapiente vel rerum dolorum. Odio et non et. Cum atque eum possimus voluptatem non. Illum enim dicta atque rem numquam quaerat. Harum est et alias soluta velit molestiae facere iure nemo.',
      date: '2021-05-10T00:00:00.000Z',
      reviewer_name: 'Otto_Leannon56',
      helpfulness: 28,
      photos: [
        {
          id: 2255281,
          url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
        {
          id: 2255282,
          url: 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
        },
        {
          id: 2255283,
          url: 'https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80',
        },
      ],
    },
    {
      review_id: 1157614,
      rating: 4,
      summary: 'Voluptatum nobis deleniti est.',
      recommend: true,
      response: null,
      body: 'Aut dolorem minima inventore ut eos quisquam sed voluptas. Quia tempora voluptas rem eaque modi natus totam nisi. Minus at deleniti quae neque in eos quis.',
      date: '2021-05-04T00:00:00.000Z',
      reviewer_name: 'Stefan91',
      helpfulness: 18,
      photos: [
        {
          id: 2255280,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
    },
    {
      review_id: 1157611,
      rating: 2,
      summary: 'Eligendi reiciendis eligendi animi est consequuntur aspernatur enim officia sit.',
      recommend: true,
      response: null,
      body: 'Ea ratione excepturi nihil perferendis perferendis quas quo. Sunt qui iste ratione facilis architecto. Mollitia ipsam ut et sit assumenda harum perferendis nam. Assumenda assumenda nisi autem fugiat vero id. Incidunt inventore dolores.',
      date: '2021-04-16T00:00:00.000Z',
      reviewer_name: 'Micheal39',
      helpfulness: 3,
      photos: [
        {
          id: 2255286,
          url: 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
        {
          id: 2255287,
          url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255288,
          url: 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
      ],
    },
    {
      review_id: 1157609,
      rating: 4,
      summary: 'At consequuntur est dolorum soluta dolorem voluptatem.',
      recommend: true,
      response: null,
      body: 'Praesentium alias modi eaque odit facere et qui numquam ea. Voluptatem voluptates veniam sed et voluptatem similique pariatur voluptatem sequi. Totam accusamus autem in harum sed cupiditate. Nihil mollitia excepturi facilis laboriosam ratione. Voluptatem praesentium illum accusantium eos commodi consequatur. Aut esse et eaque dolores pariatur nobis.',
      date: '2021-04-09T00:00:00.000Z',
      reviewer_name: 'Adelia26',
      helpfulness: 9,
      photos: [
        {
          id: 2255291,
          url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
        },
        {
          id: 2255292,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
    },
  ],
};

const testHelpfulReviews = {
  product: '66741',
  page: 0,
  count: 50,
  results: [
    {
      review_id: 1157617,
      rating: 1,
      summary: 'Et quisquam nam sunt est est ipsam eos nostrum est.',
      recommend: false,
      response: null,
      body: 'Dolor quo illo in incidunt voluptas fugiat. Ut mollitia possimus autem. Facilis commodi fugiat voluptas laudantium reprehenderit. Laudantium magnam laborum. Excepturi consequatur nulla enim ea consequatur sunt neque officiis sunt.',
      date: '2021-05-31T00:00:00.000Z',
      reviewer_name: 'Aliyah33',
      helpfulness: 29,
      photos: [
        {
          id: 2255272,
          url: 'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
        {
          id: 2255273,
          url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255274,
          url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 1157613,
      rating: 5,
      summary: 'Sunt sed dolor vitae aliquid dolores temporibus.',
      recommend: true,
      response: null,
      body: 'Laudantium veniam dolores odio asperiores vero. Dolorum distinctio nemo sapiente vel rerum dolorum. Odio et non et. Cum atque eum possimus voluptatem non. Illum enim dicta atque rem numquam quaerat. Harum est et alias soluta velit molestiae facere iure nemo.',
      date: '2021-05-10T00:00:00.000Z',
      reviewer_name: 'Otto_Leannon56',
      helpfulness: 28,
      photos: [
        {
          id: 2255281,
          url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
        {
          id: 2255282,
          url: 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
        },
        {
          id: 2255283,
          url: 'https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80',
        },
      ],
    },
    {
      review_id: 1157616,
      rating: 2,
      summary: 'Et assumenda repellat suscipit.',
      recommend: true,
      response: null,
      body: 'Inventore sint in recusandae. Enim asperiores facere quod. Rem iste ex placeat dicta error dolorem incidunt. Neque dolor consequatur nulla.',
      date: '2021-12-10T00:00:00.000Z',
      reviewer_name: 'Dortha_Runte23',
      helpfulness: 27,
      photos: [
        {
          id: 2255275,
          url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255276,
          url: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255277,
          url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157610,
      rating: 4,
      summary: 'Minus molestiae architecto voluptatem consequatur.',
      recommend: true,
      response: null,
      body: 'Nihil laborum sit pariatur magni sit alias sunt. Earum explicabo nobis quis quasi nesciunt animi at pariatur repellendus. Porro id enim qui vitae quia numquam. Debitis sit et eos enim aut et autem molestias. Saepe voluptas ut est ipsum libero.',
      date: '2022-03-27T00:00:00.000Z',
      reviewer_name: 'Avis_Gibson41',
      helpfulness: 27,
      photos: [
        {
          id: 2255289,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255290,
          url: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 1157615,
      rating: 3,
      summary: 'Qui eum quasi.',
      recommend: true,
      response: null,
      body: 'Unde quod nihil. Incidunt consequuntur veniam natus. Minus alias in eaque eius. Maiores eaque illum. Aut cupiditate reprehenderit porro.',
      date: '2021-09-10T00:00:00.000Z',
      reviewer_name: 'Newton.Bashirian63',
      helpfulness: 23,
      photos: [
        {
          id: 2255278,
          url: 'https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255279,
          url: 'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
      ],
    },
    {
      review_id: 1157619,
      rating: 4,
      summary: 'Est illum illum cupiditate quos aliquam vel quia quasi.',
      recommend: true,
      response: '"Aspernatur tempore dolores vel et necessitatibus atque et."',
      body: 'Eligendi qui qui veniam id dolorem odio sit. Sit saepe soluta nam delectus ex est perspiciatis ut voluptas. Ab error reprehenderit minima dolorem dolor voluptate minima dolores. Animi occaecati est temporibus corrupti officiis quos.',
      date: '2021-12-11T00:00:00.000Z',
      reviewer_name: 'Garfield.Homenick10',
      helpfulness: 21,
      photos: [
        {
          id: 2255269,
          url: 'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157620,
      rating: 5,
      summary: 'Maxime ipsum aliquid et aut perferendis suscipit blanditiis et reprehenderit.',
      recommend: true,
      response: null,
      body: 'Dolores adipisci dolores ipsum sit in. Odio cum aliquam. Tempora ipsum exercitationem consectetur. Est fugit cum ut quibusdam earum et praesentium nobis quisquam.',
      date: '2021-05-12T00:00:00.000Z',
      reviewer_name: 'Taryn18',
      helpfulness: 20,
      photos: [
        {
          id: 2255266,
          url: 'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255267,
          url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255268,
          url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157614,
      rating: 4,
      summary: 'Voluptatum nobis deleniti est.',
      recommend: true,
      response: null,
      body: 'Aut dolorem minima inventore ut eos quisquam sed voluptas. Quia tempora voluptas rem eaque modi natus totam nisi. Minus at deleniti quae neque in eos quis.',
      date: '2021-05-04T00:00:00.000Z',
      reviewer_name: 'Stefan91',
      helpfulness: 18,
      photos: [
        {
          id: 2255280,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
    },
    {
      review_id: 1157612,
      rating: 5,
      summary: 'Voluptatem consequatur assumenda possimus fugit magni voluptatem fugit minima.',
      recommend: true,
      response: null,
      body: 'Cupiditate repellendus adipisci aspernatur deleniti et. Doloribus labore assumenda cum doloribus. Qui sunt temporibus sed.',
      date: '2021-09-14T00:00:00.000Z',
      reviewer_name: 'Spencer.Hammes',
      helpfulness: 17,
      photos: [
        {
          id: 2255284,
          url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255285,
          url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
        },
      ],
    },
    {
      review_id: 1157625,
      rating: 1,
      summary: 'Quidem optio fugit quo et.',
      recommend: false,
      response: null,
      body: 'Nisi autem velit dolores itaque voluptas laboriosam veritatis est porro. Et omnis ipsa eum dolore facere. Aliquid corrupti perspiciatis est quos. Dolor vel quae dolorum voluptatum itaque. Mollitia est velit asperiores beatae illo dicta id.',
      date: '2021-09-20T00:00:00.000Z',
      reviewer_name: 'Dayton_Glover',
      helpfulness: 14,
      photos: [
        {
          id: 2255254,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255255,
          url: 'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255256,
          url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157626,
      rating: 5,
      summary: 'Est magnam ipsum laboriosam nihil deserunt molestias doloribus repudiandae.',
      recommend: true,
      response: null,
      body: 'Optio et ad velit expedita laboriosam ex. Voluptatem minus voluptatem at nobis neque iusto ut. Esse deserunt commodi ex ex minima fugiat officiis sit. Itaque voluptatem distinctio quos non deserunt eligendi.',
      date: '2021-11-18T00:00:00.000Z',
      reviewer_name: 'Lysanne_Windler',
      helpfulness: 13,
      photos: [
        {
          id: 2255251,
          url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255252,
          url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255253,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157624,
      rating: 3,
      summary: 'Mollitia expedita cumque accusamus tenetur veritatis est quia qui.',
      recommend: true,
      response: null,
      body: 'Labore et rerum porro quo aut sequi. Quaerat pariatur sapiente repellat dolorem quis repellat. Vel vel exercitationem error est ut repudiandae totam voluptas consequuntur.',
      date: '2022-01-21T00:00:00.000Z',
      reviewer_name: 'Tyson.Flatley84',
      helpfulness: 10,
      photos: [
        {
          id: 2255257,
          url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255258,
          url: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157618,
      rating: 1,
      summary: 'Sapiente dicta cumque quia ab et autem.',
      recommend: false,
      response: null,
      body: 'Eum eligendi accusamus. Aut voluptatem maxime error sit suscipit. Repudiandae consectetur perferendis aut ut reprehenderit est inventore deleniti vel.',
      date: '2021-12-13T00:00:00.000Z',
      reviewer_name: 'Lorna15',
      helpfulness: 10,
      photos: [
        {
          id: 2255270,
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 2255271,
          url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157609,
      rating: 4,
      summary: 'At consequuntur est dolorum soluta dolorem voluptatem.',
      recommend: true,
      response: null,
      body: 'Praesentium alias modi eaque odit facere et qui numquam ea. Voluptatem voluptates veniam sed et voluptatem similique pariatur voluptatem sequi. Totam accusamus autem in harum sed cupiditate. Nihil mollitia excepturi facilis laboriosam ratione. Voluptatem praesentium illum accusantium eos commodi consequatur. Aut esse et eaque dolores pariatur nobis.',
      date: '2021-04-09T00:00:00.000Z',
      reviewer_name: 'Adelia26',
      helpfulness: 9,
      photos: [
        {
          id: 2255291,
          url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
        },
        {
          id: 2255292,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
    },
    {
      review_id: 1157627,
      rating: 1,
      summary: 'Officia enim qui saepe itaque distinctio suscipit.',
      recommend: false,
      response: null,
      body: 'Ut aliquam repellendus quo molestiae maxime iusto error. Ut sit magnam voluptate rerum non. Consequatur iste earum aspernatur. Voluptates asperiores sint unde voluptatem earum eos perspiciatis quas.',
      date: '2022-02-18T00:00:00.000Z',
      reviewer_name: 'Dixie.Kihn',
      helpfulness: 6,
      photos: [
        {
          id: 2255249,
          url: 'https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80',
        },
        {
          id: 2255250,
          url: 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
      ],
    },
    {
      review_id: 1157622,
      rating: 3,
      summary: 'Placeat ut omnis at et ullam beatae.',
      recommend: true,
      response: null,
      body: 'Dolor ad aperiam nihil possimus. Est facere molestiae aliquid. Facere iure quia aut labore id aut rerum aperiam quo. Iusto est quia nisi. Id id porro accusamus et libero dolorum. Neque eveniet ipsum.',
      date: '2021-05-17T00:00:00.000Z',
      reviewer_name: 'Aditya.Leuschke',
      helpfulness: 5,
      photos: [
        {
          id: 2255262,
          url: 'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255263,
          url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
        },
        {
          id: 2255264,
          url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
        },
      ],
    },
    {
      review_id: 1157611,
      rating: 2,
      summary: 'Eligendi reiciendis eligendi animi est consequuntur aspernatur enim officia sit.',
      recommend: true,
      response: null,
      body: 'Ea ratione excepturi nihil perferendis perferendis quas quo. Sunt qui iste ratione facilis architecto. Mollitia ipsam ut et sit assumenda harum perferendis nam. Assumenda assumenda nisi autem fugiat vero id. Incidunt inventore dolores.',
      date: '2021-04-16T00:00:00.000Z',
      reviewer_name: 'Micheal39',
      helpfulness: 3,
      photos: [
        {
          id: 2255286,
          url: 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
        {
          id: 2255287,
          url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255288,
          url: 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
      ],
    },
    {
      review_id: 1157623,
      rating: 1,
      summary: 'Veniam enim numquam.',
      recommend: false,
      response: null,
      body: 'Aperiam accusamus et nesciunt excepturi eum mollitia et pariatur. Voluptatum ab totam temporibus. Voluptas sint fugiat.',
      date: '2021-07-14T00:00:00.000Z',
      reviewer_name: 'Jana76',
      helpfulness: 2,
      photos: [
        {
          id: 2255259,
          url: 'https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255260,
          url: 'https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80',
        },
        {
          id: 2255261,
          url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
        },
      ],
    },
  ],
};

const testRelevantReviews = {
  product: '66741',
  page: 0,
  count: 50,
  results: [
    {
      review_id: 1157617,
      rating: 1,
      summary: 'Et quisquam nam sunt est est ipsam eos nostrum est.',
      recommend: false,
      response: null,
      body: 'Dolor quo illo in incidunt voluptas fugiat. Ut mollitia possimus autem. Facilis commodi fugiat voluptas laudantium reprehenderit. Laudantium magnam laborum. Excepturi consequatur nulla enim ea consequatur sunt neque officiis sunt.',
      date: '2021-05-31T00:00:00.000Z',
      reviewer_name: 'Aliyah33',
      helpfulness: 29,
      photos: [
        {
          id: 2255272,
          url: 'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
        {
          id: 2255273,
          url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255274,
          url: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 1157613,
      rating: 5,
      summary: 'Sunt sed dolor vitae aliquid dolores temporibus.',
      recommend: true,
      response: null,
      body: 'Laudantium veniam dolores odio asperiores vero. Dolorum distinctio nemo sapiente vel rerum dolorum. Odio et non et. Cum atque eum possimus voluptatem non. Illum enim dicta atque rem numquam quaerat. Harum est et alias soluta velit molestiae facere iure nemo.',
      date: '2021-05-10T00:00:00.000Z',
      reviewer_name: 'Otto_Leannon56',
      helpfulness: 28,
      photos: [
        {
          id: 2255281,
          url: 'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
        {
          id: 2255282,
          url: 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
        },
        {
          id: 2255283,
          url: 'https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80',
        },
      ],
    },
    {
      review_id: 1157616,
      rating: 2,
      summary: 'Et assumenda repellat suscipit.',
      recommend: true,
      response: null,
      body: 'Inventore sint in recusandae. Enim asperiores facere quod. Rem iste ex placeat dicta error dolorem incidunt. Neque dolor consequatur nulla.',
      date: '2021-12-10T00:00:00.000Z',
      reviewer_name: 'Dortha_Runte23',
      helpfulness: 27,
      photos: [
        {
          id: 2255275,
          url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255276,
          url: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255277,
          url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157610,
      rating: 4,
      summary: 'Minus molestiae architecto voluptatem consequatur.',
      recommend: true,
      response: null,
      body: 'Nihil laborum sit pariatur magni sit alias sunt. Earum explicabo nobis quis quasi nesciunt animi at pariatur repellendus. Porro id enim qui vitae quia numquam. Debitis sit et eos enim aut et autem molestias. Saepe voluptas ut est ipsum libero.',
      date: '2022-03-27T00:00:00.000Z',
      reviewer_name: 'Avis_Gibson41',
      helpfulness: 27,
      photos: [
        {
          id: 2255289,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255290,
          url: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
    },
    {
      review_id: 1157615,
      rating: 3,
      summary: 'Qui eum quasi.',
      recommend: true,
      response: null,
      body: 'Unde quod nihil. Incidunt consequuntur veniam natus. Minus alias in eaque eius. Maiores eaque illum. Aut cupiditate reprehenderit porro.',
      date: '2021-09-10T00:00:00.000Z',
      reviewer_name: 'Newton.Bashirian63',
      helpfulness: 23,
      photos: [
        {
          id: 2255278,
          url: 'https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255279,
          url: 'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
      ],
    },
    {
      review_id: 1157619,
      rating: 4,
      summary: 'Est illum illum cupiditate quos aliquam vel quia quasi.',
      recommend: true,
      response: '"Aspernatur tempore dolores vel et necessitatibus atque et."',
      body: 'Eligendi qui qui veniam id dolorem odio sit. Sit saepe soluta nam delectus ex est perspiciatis ut voluptas. Ab error reprehenderit minima dolorem dolor voluptate minima dolores. Animi occaecati est temporibus corrupti officiis quos.',
      date: '2021-12-11T00:00:00.000Z',
      reviewer_name: 'Garfield.Homenick10',
      helpfulness: 21,
      photos: [
        {
          id: 2255269,
          url: 'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157620,
      rating: 5,
      summary: 'Maxime ipsum aliquid et aut perferendis suscipit blanditiis et reprehenderit.',
      recommend: true,
      response: null,
      body: 'Dolores adipisci dolores ipsum sit in. Odio cum aliquam. Tempora ipsum exercitationem consectetur. Est fugit cum ut quibusdam earum et praesentium nobis quisquam.',
      date: '2021-05-12T00:00:00.000Z',
      reviewer_name: 'Taryn18',
      helpfulness: 20,
      photos: [
        {
          id: 2255266,
          url: 'https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255267,
          url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255268,
          url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157614,
      rating: 4,
      summary: 'Voluptatum nobis deleniti est.',
      recommend: true,
      response: null,
      body: 'Aut dolorem minima inventore ut eos quisquam sed voluptas. Quia tempora voluptas rem eaque modi natus totam nisi. Minus at deleniti quae neque in eos quis.',
      date: '2021-05-04T00:00:00.000Z',
      reviewer_name: 'Stefan91',
      helpfulness: 18,
      photos: [
        {
          id: 2255280,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
    },
    {
      review_id: 1157612,
      rating: 5,
      summary: 'Voluptatem consequatur assumenda possimus fugit magni voluptatem fugit minima.',
      recommend: true,
      response: null,
      body: 'Cupiditate repellendus adipisci aspernatur deleniti et. Doloribus labore assumenda cum doloribus. Qui sunt temporibus sed.',
      date: '2021-09-14T00:00:00.000Z',
      reviewer_name: 'Spencer.Hammes',
      helpfulness: 17,
      photos: [
        {
          id: 2255284,
          url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255285,
          url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
        },
      ],
    },
    {
      review_id: 1157625,
      rating: 1,
      summary: 'Quidem optio fugit quo et.',
      recommend: false,
      response: null,
      body: 'Nisi autem velit dolores itaque voluptas laboriosam veritatis est porro. Et omnis ipsa eum dolore facere. Aliquid corrupti perspiciatis est quos. Dolor vel quae dolorum voluptatum itaque. Mollitia est velit asperiores beatae illo dicta id.',
      date: '2021-09-20T00:00:00.000Z',
      reviewer_name: 'Dayton_Glover',
      helpfulness: 14,
      photos: [
        {
          id: 2255254,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255255,
          url: 'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255256,
          url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157626,
      rating: 5,
      summary: 'Est magnam ipsum laboriosam nihil deserunt molestias doloribus repudiandae.',
      recommend: true,
      response: null,
      body: 'Optio et ad velit expedita laboriosam ex. Voluptatem minus voluptatem at nobis neque iusto ut. Esse deserunt commodi ex ex minima fugiat officiis sit. Itaque voluptatem distinctio quos non deserunt eligendi.',
      date: '2021-11-18T00:00:00.000Z',
      reviewer_name: 'Lysanne_Windler',
      helpfulness: 13,
      photos: [
        {
          id: 2255251,
          url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255252,
          url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255253,
          url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      review_id: 1157624,
      rating: 3,
      summary: 'Mollitia expedita cumque accusamus tenetur veritatis est quia qui.',
      recommend: true,
      response: null,
      body: 'Labore et rerum porro quo aut sequi. Quaerat pariatur sapiente repellat dolorem quis repellat. Vel vel exercitationem error est ut repudiandae totam voluptas consequuntur.',
      date: '2022-01-21T00:00:00.000Z',
      reviewer_name: 'Tyson.Flatley84',
      helpfulness: 10,
      photos: [
        {
          id: 2255257,
          url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255258,
          url: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157618,
      rating: 1,
      summary: 'Sapiente dicta cumque quia ab et autem.',
      recommend: false,
      response: null,
      body: 'Eum eligendi accusamus. Aut voluptatem maxime error sit suscipit. Repudiandae consectetur perferendis aut ut reprehenderit est inventore deleniti vel.',
      date: '2021-12-13T00:00:00.000Z',
      reviewer_name: 'Lorna15',
      helpfulness: 10,
      photos: [
        {
          id: 2255270,
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          id: 2255271,
          url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      review_id: 1157609,
      rating: 4,
      summary: 'At consequuntur est dolorum soluta dolorem voluptatem.',
      recommend: true,
      response: null,
      body: 'Praesentium alias modi eaque odit facere et qui numquam ea. Voluptatem voluptates veniam sed et voluptatem similique pariatur voluptatem sequi. Totam accusamus autem in harum sed cupiditate. Nihil mollitia excepturi facilis laboriosam ratione. Voluptatem praesentium illum accusantium eos commodi consequatur. Aut esse et eaque dolores pariatur nobis.',
      date: '2021-04-09T00:00:00.000Z',
      reviewer_name: 'Adelia26',
      helpfulness: 9,
      photos: [
        {
          id: 2255291,
          url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
        },
        {
          id: 2255292,
          url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
      ],
    },
    {
      review_id: 1157627,
      rating: 1,
      summary: 'Officia enim qui saepe itaque distinctio suscipit.',
      recommend: false,
      response: null,
      body: 'Ut aliquam repellendus quo molestiae maxime iusto error. Ut sit magnam voluptate rerum non. Consequatur iste earum aspernatur. Voluptates asperiores sint unde voluptatem earum eos perspiciatis quas.',
      date: '2022-02-18T00:00:00.000Z',
      reviewer_name: 'Dixie.Kihn',
      helpfulness: 6,
      photos: [
        {
          id: 2255249,
          url: 'https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80',
        },
        {
          id: 2255250,
          url: 'https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
      ],
    },
    {
      review_id: 1157622,
      rating: 3,
      summary: 'Placeat ut omnis at et ullam beatae.',
      recommend: true,
      response: null,
      body: 'Dolor ad aperiam nihil possimus. Est facere molestiae aliquid. Facere iure quia aut labore id aut rerum aperiam quo. Iusto est quia nisi. Id id porro accusamus et libero dolorum. Neque eveniet ipsum.',
      date: '2021-05-17T00:00:00.000Z',
      reviewer_name: 'Aditya.Leuschke',
      helpfulness: 5,
      photos: [
        {
          id: 2255262,
          url: 'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          id: 2255263,
          url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
        },
        {
          id: 2255264,
          url: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
        },
      ],
    },
    {
      review_id: 1157611,
      rating: 2,
      summary: 'Eligendi reiciendis eligendi animi est consequuntur aspernatur enim officia sit.',
      recommend: true,
      response: null,
      body: 'Ea ratione excepturi nihil perferendis perferendis quas quo. Sunt qui iste ratione facilis architecto. Mollitia ipsam ut et sit assumenda harum perferendis nam. Assumenda assumenda nisi autem fugiat vero id. Incidunt inventore dolores.',
      date: '2021-04-16T00:00:00.000Z',
      reviewer_name: 'Micheal39',
      helpfulness: 3,
      photos: [
        {
          id: 2255286,
          url: 'https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
        },
        {
          id: 2255287,
          url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 2255288,
          url: 'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
      ],
    },
    {
      review_id: 1157623,
      rating: 1,
      summary: 'Veniam enim numquam.',
      recommend: false,
      response: null,
      body: 'Aperiam accusamus et nesciunt excepturi eum mollitia et pariatur. Voluptatum ab totam temporibus. Voluptas sint fugiat.',
      date: '2021-07-14T00:00:00.000Z',
      reviewer_name: 'Jana76',
      helpfulness: 2,
      photos: [
        {
          id: 2255259,
          url: 'https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          id: 2255260,
          url: 'https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80',
        },
        {
          id: 2255261,
          url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
        },
      ],
    },
  ],
};

const reviewStore = create(
  ((set) => ({
    averageRating: 0,
    setAverageRating: (data) => set({ averageRating: data }),
    helpfulReviews: testHelpfulReviews,
    setHelpfulReviews: (data) => set(() => ({ helpfulReviews: data })),
    newestReviews: testNewestReviews,
    setNewestReviews: (data) => set(() => ({ newestReviews: data })),
    ratings: testRatings,
    setRatings: (data) => set({ ratings: data }),
    relevantReviews: testRelevantReviews,
    setRelevantReviews: (data) => set(() => ({ relevantReviews: data })),
    reviews: testReviews,
    setReviews: (data) => set(() => ({ reviews: data })),
  })),
);

export {
  detailStore, questionsStore, reviewStore,
};
