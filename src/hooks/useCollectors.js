import { useMoralis } from 'react-moralis';

const useCollectors = () => {

        const { Moralis, account} = useMoralis();
        const getUser = async () => {
            const users = Moralis.Object.extend("DonutCollectors")
            const query = new Moralis.Query(users);
            query.equalTo("ethAddress", account);
            const data = await query.first();

            if(data !== undefined) {
                console.log(data);
            } else if (account) {
                const newUser = new users();

                newUser.set("ethAddress", account);
                newUser.set("donuts", 0);
                newUser.set("daysInARow", 0);
                newUser.set("lastCollected", "2022-01-01")
            }
        }

        return {getUser}
};

export default useCollectors;
