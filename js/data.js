/*
꽃등심,0/
갈비살,1/
살치살,2/
삼각살,3/
안심,4/
토시살,5/
채끝살,6/
부채살,7/
*/

const qnaList = [
    {
      q: '1. 마블링 정도는 어떤 것을 선호하세요?',
      a: [
        { answer: '많음', type: [1,6 ] },
        { answer: '보통', type: [0,7,2] },
        { answer: '적음', type: [5,3,4] },
      ]
    },
    {
      q: '2. 어떤 식감을 선호하시나요? ',
      a: [
        { answer: '쫄깃함', type: [1,3] },
        { answer: '부드럽고 쫄깃함', type: [5,7,6] },
        { answer: '부드러움', type: [0,4] },
      ]
    },
    {
      q: '3. 육즙은 어느 정도를 선호하시나요?',
      a: [
        { answer: '적음', type: [1,6,0] },
        { answer: '보통', type: [7,2] },
        { answer: '많음', type: [5,3,4] }
      ]
    },
    {
      q: '4. 어느 정도 가격대의 고기 부위를 고르시나요?',
      a: [
        { answer: '가성비가 좋은 부위 ', type: [3, 5,2] },
        { answer: '적당한 가격의 부위 ', type: [1,7 ] },
        { answer: '가격대가 있는 부위', type: [0,4,6] },
      ]
    },
    {
      q: '5. 특수부위를 찾아 드시나요? ',
      a: [
        { answer: '소 한마리당 1~2% 정도 밖에 나오지 않는 귀한 부위를 선호합니다', type: [4,0,6] },
        { answer: '일반적으로 많이 먹을 수 있는 부위를 선호합니다.', type: [1,7]},
        { answer: '특수 부위인지 아닌지는 신경쓰지 않습니다.', type: [2,5,3] },
      ]
    },
  
    {
      q: '6. 좋아하는 고기 요리는 무엇인가요?',
      a: [
        { answer: '스테이크', type: [0,4,7] },
        { answer: '찜, 탕 국물 요리', type: [1,5,6 ] },
        { answer: '불고기, 볶음 요리', type: [2,3] },
      ]
    },
    {
      q: '7. 주로 인기있는 부위를 구매하시나요?',
      a: [
        { answer: '대중적이고 호불호가 없는 부위를 선호합니다.', type: [1,0 ] },
        { answer: '어떤 부위이든 인기와는 상관없이 구매합니다.', type: [2,4,6] },
        { answer: '개인적인 취향에 맞는 고기를 구매합니다.', type: [3,5,7] },
      ]
    },
    {
      q: '8. 육향은 어느 정도를 선호하시나요?',
      a: [
        { answer: '가벼움', type: [3,7] },
        { answer: '보통', type: [4,2,5] },
        { answer: '진함.', type: [0,6,1] },
      ]
    },

  ]
  

const infoList = [
  {
    name: '<꽃등심>',
    desc: '꽃등심을 좋아하는 사람은 세심하고 디테일한 부분에 주의를 기울이는 타입입니다. 완벽주의자적인 면모가 있고 고급스러운 것을 선호하며, 일상에서도 품격을 유지하려고 노력합니다.'
    
  },
  {
    name: '<갈비살>',
    desc: '갈비살을 좋아하는 사람은 어디서든 잘 어울리는 성격입니다. 사회성이 뛰어나며, 가족이나 친구와의 관계를 중요하게 생각합니다. 원칙을 따르는 것을 좋아하며, 고집이 조금 있을 수 있습니다.'
    
  },
  {
    name: '<살치살>',
    desc: '살치살을 좋아하는 사람은 삶이 풍부하고 복합적인 타입입니다. 다양한 관심사를 가지고 있으며, 새로운 경험과 변화를 즐깁니다. 대화가 풍부하고, 새로운 아이디어를 제안하는 것을 좋아합니다.'
  },
  {
    name: '<삼각살>',
    desc: '삼각살을 좋아하는 사람은 뚜렷하고 강렬한 성격을 가지고 있습니다. 강한 의지와 리더십을 가지고 있으며, 대범하고 열정적입니다. 어려움을 겪어도 잘 이겨내는 힘이 있습니다.'
  },
  {
    name: '<안심>',
    desc: '안심을 좋아하는 사람은 부드럽고 섬세한 성격을 가지고 있습니다. 침착하고 차분하며, 상황을 잘 이해하고 문제를 해결하는 능력이 있습니다. 이와 더불어 내성적인 면모가 있을 수 있습니다.'
  },
  {
    name: '<토시살>',
    desc: '토시살을 좋아하는 사람은 그만큼 독특하고 창의적인 성격을 가지고 있습니다. 독립적이고, 자신만의 길을 가는 것을 선호합니다. 다른 사람과는 다른 독특한 관점을 가지고 있을 가능성이 높습니다.'
    
  },
  {
    name: '<채끝살>',
    desc: '채끝살을 좋아하는 사람은 럭셔리한 것을 좋아하는 타입입니다. 고급스러운 것을 선호하며, 삶의 질을 중요하게 여깁니다. 취향이 세련되지만 사치스럽게 보일 수 있습니다.'
  },
  {
    name: '<부채살>',
    desc: '부채살을 선호하는 사람은 겉모습과는 달리, 깊고 풍부한 내면을 간직하고 있습니다. 겸손하고 차분하며,  깊은 생각을 가진 사람일 가능성이 높습니다. 자신만의 감성을 이해해주는 사람을 중요하게 여깁니다.'
  },

]
