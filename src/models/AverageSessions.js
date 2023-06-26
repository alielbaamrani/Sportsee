/**
 * Class representing the user's average sessions.
 */
class AverageSessions {

    /**
     * Creates the user's average sessions data.
     * @param   {Number}    data.userId                    The user's id.
     * @param   {Object[]}  data.sessions                  The user's session.
     * @param   {Number}    data.sessions[].day            Session day.
     * @param   {Number}    data.sessions[].sessionLength  Session length.
     */
    constructor(data) {
        this.sessions = data.data.sessions.map(data => {
            switch (data.day) {
                case 1:
                    return { ...data, day: "L" };
                case 2:
                    return { ...data, day: "M" };
                case 3:
                    return { ...data, day: "M" };
                case 4:
                    return { ...data, day: "J" };
                case 5:
                    return { ...data, day: "V" };
                case 6:
                    return { ...data, day: "S" };
                case 7:
                    return { ...data, day: "D" };
                default:
                    return { ...data };
            }
        })
    }
}

export default AverageSessions