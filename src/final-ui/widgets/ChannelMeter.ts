import { LevelMeter } from '@deutschesoft/aux-widgets/src/index.pure.js';
import { componentFromWidget } from '@deutschesoft/use-aux-widgets';

const ChannelMeter = componentFromWidget(
  LevelMeter,
  {
    leveldata$: {
      name: 'value', //could be any parameter value is transformed
     // 'transformReceive': function(v){return (v+5)*7}
    },
    labeldata$: {
      name: 'label' 
    },
  },
  {
    min: -100,
    max: 0,
    scale: 'decibel',
    segment: 3,
    hold_size: 2,
    show_hold: false,
    peak_value: -1,
    show_label: true,
    auto_hold: 500, 
    clipping: -1,
    clip: true,
    show_clip: true,
    auto_clip: 500,
    falling: 25,
    falling_duration: 500,
    foreground: 'rgba(255,255,255,1)',
    gradient: {'-10':'darkorange','-7':'darkorange','-6.5':'darkorange','-6.46':'#FF5600'} 
  },
  'ChannelMeter'
);

export default ChannelMeter;
