import express from 'express';

const MODULE = '[Init]';

const main = async (props: { port: number | string }) => {
    console.log(MODULE, 'Creating server');
    const app = express();

    app.listen(props.port, () => {
        console.log(MODULE, `Server listening on port ${props.port}...`);
    });
};

main({
    port: process.env.PORT  || 8100
});