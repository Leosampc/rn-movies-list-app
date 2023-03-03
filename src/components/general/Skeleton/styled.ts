import styled from 'styled-components/native';
import RNLinearGradient from 'react-native-linear-gradient';

export const LinearGradient = styled(RNLinearGradient).attrs(({ theme }) => ({
	colors: ['transparent', `${theme.colors.black}0F`, 'transparent'],
	start: { x: 1, y: 1 },
}))`
	width: 100%;
	height: 100%;
`;
