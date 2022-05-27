import FullScreanSection from './componets/FullScreanSection';
import GetRequestSection from './componets/GetRequestSection';
import Header from './componets/Header';
import PostRequestSection from './componets/PostRequestSection';

import { Container } from './styled/Container';

function App() {
	return (
		<Container>
			<Header />
			<FullScreanSection />
			<GetRequestSection />
			<PostRequestSection />
		</Container>
	);
}

export default App;
