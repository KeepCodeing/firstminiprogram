Component({
  properties: {},
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    swiper_config: {
      indicatorDots: true,
      indicatorColor: 'rgba(0, 0, 0, .3)',
      indicatorActiveColor: '#000',
      autoplay: true,
      current: 0,
      interval: 2000,
      duration: 500,
      swiper_info: [
        { icon: '../../../images/icons/chart.png', title: 'Network Analysis', text: 'Activate page navigation any page throughout your the selection one simple option the admin area doing this.' },
        { icon: '../../../images/icons/wifi.png', title: 'Media Marketing', text: 'Activate page navigation any page throughout your the selection one simple option the admin area doing this.' },
        { icon: '../../../images/icons/image.png', title: 'Market Analysis', text: 'Activate page navigation any page throughout your the selection one simple option the admin area doing this.' },
        { icon: '../../../images/icons/people.png', title: 'Social Marketing', text: 'Activate page navigation any page throughout your the selection one simple option the admin area doing this.' },
        { icon: '../../../images/icons/Chart_line.png', title: 'Software Development', text: 'Activate page navigation any page throughout your the selection one simple option the admin area doing this.' },
      ]
    }
  },
  methods: {}
});
