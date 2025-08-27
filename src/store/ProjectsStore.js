import nowayout from './../assets/images/nowayout.png';
import womazing from './../assets/images/womazing.png';
import artrohard from './../assets/images/artrohard.png';
import blog from './../assets/images/blog.png';

import reactIcon from './../assets/images/react.jpg';
import htmlIcon from './../assets/images/html.png';
import laravelIcon from './../assets/images/laravel.png';

const projectsStore = [
    {
        preview: nowayout,
        title: 'NoWayOut',
        text: 'Quest rooms with different difficulties in a scary style',
        icon: laravelIcon,
        link: 'https://www.nowayout-escape.at/de/',
    },
    {
        preview: womazing,
        title: 'Womazing',
        text: 'Small online clothing store',
        icon: reactIcon,
        link: 'https://hiblurryface.github.io/womazing/'
    },
    {
        preview: blog,
        title: 'Private blog',
        text: 'A small blog where you can post something from your life',
        icon: reactIcon,
        link: 'https://hiblurryface.github.io/react-blog/',
    },
    {
        preview: artrohard,
        title: 'Arthrohard',
        text: 'Lab-V Arthrohard Preparat na wsparcie stawów dla psa i kota',
        icon: htmlIcon,
        link: 'https://hiblurryface.github.io/arthrohard/'
    },
]

export default projectsStore