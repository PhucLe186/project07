import Header from '~/user/component/mainlayout/Header';
import Footer from '~/user/component/mainlayout/Footer';

function Default({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="contain">{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default Default;
