import cors from 'cors';
import bodyParser from 'body-parser';
import router from '../routes';

const expressLoader = ({ app }) => {
    try {
        // set middleware
        app.use(cors({ origin: '*' }));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // set routers
        app.use('/api', router);

        console.log(`[Loader]: Express config loaded`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default expressLoader;
