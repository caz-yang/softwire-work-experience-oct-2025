import sql from '../../services/postgres.js';

export const someAction = async (res, parameters) => {
    await sql`INSERT INTO tetris_scores (score) VALUES (100)`;
    const data = await sql`SELECT * FROM tetris_scores`;
    
    return  res.status(200).json({
        status: 200,
        message: 'This is an example',
        data: data
    })
}