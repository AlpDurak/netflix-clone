import "/styles/globals.css";
import "/styles/Navbar.component.css";
import "/styles/Viewcard.component.css";
import "/styles/Slider.component.css";
import "/styles/Rankcard.component.css";
import Layout from "/components/layout";

function NetflixClone({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default NetflixClone;
