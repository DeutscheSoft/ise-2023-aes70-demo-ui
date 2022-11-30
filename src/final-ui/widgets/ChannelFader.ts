import { Fader } from '@deutschesoft/aux-widgets/src/index.pure.js';
import { componentFromWidget } from '@deutschesoft/use-aux-widgets';

const ChannelFader = componentFromWidget(
  Fader,
  {
    gain$: {
      name: 'value'
    },
  },
  {
    min: -6,
    max: 12,
    value_label: 'Input',
    show_label: true,
    label: 'Makeup (dB)',
  },
  'ChannelFader'
);

export default ChannelFader;
