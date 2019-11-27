import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
    colors: ['#00D6D4', '#007ED0'],
    start: { x: 1, y: 1 },
    end: { x: 0, y: 0 },
})`
    flex: 1;
`;
