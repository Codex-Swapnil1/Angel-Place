import { TriangleUpIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React, {useState} from 'react';
import { Buttonscroll } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Buttonscroll>
    <Box onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}} >
    <TriangleUpIcon
	/>
    </Box>
	</Buttonscroll>
);
}

export default ScrollButton;
