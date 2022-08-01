import React from 'react';
import { TailSpin } from 'react-loader-spinner';

import { defaultTheme } from '@/theme';


const Loader = () => <TailSpin color={defaultTheme.colors.gray} height={80} width={80} />;

export default Loader;
