import Head from 'next/head';
import styles from '../styles/Home.module.css'
import cx from 'classnames';
// import useSWR from 'swr';
import { saveAs } from 'file-saver';
import path from 'path';


const fetcher = (url) => fetch(url).then((res) => res.json());

function dashboard() {
    // const { data, error } = useSWR('/api/staticdata', fetcher);
    return (
        <div className={styles.container}>
            <Head>
                <title>TARP-Dashboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={cx(styles["form-signin"], "text-center", "mt-5", "main")}>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        // console.log();
                        var blob = new Blob([e.target[0].value], { type: "text/plain;charset=utf-8" });
                        saveAs(blob, "dynamic.txt");
                        // window.open(path.join(process.cwd(), 'public') + "/data.json", "_blank");
                        window.open("https://raw.githubusercontent.com/metal0bird/TARP_early_suicide_prediction/main/login/public/data.json", "_blank");

                    }}
                >
                    <h1 className="h3 mb-3 fw-normal text-light">Dashboard</h1>

                    <div className="form-floating mb-3">
                        <textarea type="text" className="form-control" id="Input" placeholder="Enter Text" />
                        <label htmlFor="Input">Enter Text</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default dashboard