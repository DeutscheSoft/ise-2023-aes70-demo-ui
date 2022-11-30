import { Label } from '@deutschesoft/aux-widgets/src/index.pure.js';
import { componentFromWidget } from '@deutschesoft/use-aux-widgets';

const ChannelLabel = componentFromWidget(
  Label,
  {
    labeldata$: {
      name: 'label' 
    },
  },
  {
  },
  'ChannelLabel'
);

export default ChannelLabel;
