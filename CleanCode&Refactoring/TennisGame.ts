export class TennisGame {
    score: string = '';

    getScore(player1Name: string,
             player2Name: string,
             m_score1: number,
             m_score2: number) {
        let tempScore = 0;

        if (m_score1 != m_score2) {
            if (m_score1 >= 4 || m_score2 >= 4) {
                for (let i = 1; i < 3; i++) {
                    if (i == 1) tempScore = m_score1;
                    else {
                        this.score += "-";
                        tempScore = m_score2;
                    }
                    if (tempScore === 0)
                        this.score += "Love";
                    else if (tempScore === 1)
                        this.score += "Fifteen";
                    else if (tempScore === 2)
                        this.score += "Thirty";
                    else if (tempScore === 3)
                        return "Forty";
                }
            } else {
                let minusResult = m_score1 - m_score2;
                if (minusResult === 1)
                    return "Advantage player1";
                if (minusResult === -1)
                    return "Advantage player2";
                if (minusResult >= 2)
                    return "Win for player1";

                else return "Win for player2";
            }
        } else {
            if (m_score1 === 0)
                return "Love-All";
            if (m_score1 === 1)
                return "Fifteen-All";
            if (m_score1 === 2)
                return "Thirty-All";
            if (m_score1 === 3)
                return "Forty-All";
            else return "Deuce";
        }
    }
}