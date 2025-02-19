import sql from '../../services/postgres.js';

export const someAction = async (res, parameters) => {
    await sql`INSERT INTO tetris_scores (player_name, score) VALUES ('foo', 100)`;
    const data = await sql`SELECT * FROM tetris_scores`;
    
    return  res.status(200).json({
        status: 200,
        message: 'This is an example',
        data: data
    })
}

export const getScores = async (res, parameters) => {
    const data = await sql`SELECT * FROM public.tetris_scores ORDER BY score DESC`;
    
    return  res.status(200).json({
        status: 200,
        message: 'Exporting scores in descending order',
        data: data
    })
}

export const postScore = async (res, parameters) => {
    if (!('player_name' in parameters && 'score' in parameters)) {
        return res.status(400).json({
            status: 400,
            message: `Missing fields: 'player_name' or 'score'`,
        })
    }

    if (!Number.isInteger(parameters.score)) {
        return res.status(400).json({
            status: 400,
            message: `'Score' field should be an int`,
        })
    }

    await sql`INSERT INTO tetris_scores (player_name, score) VALUES ('${parameters.player_name}', ${parameters.score})`;
    return  res.status(200).json({
        status: 200,
        message: 'Score was posted',
        data: data
    })
}
