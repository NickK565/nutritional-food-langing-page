const postData = async (url,data) => {
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getResourse = async(url, data) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export {getResourse};
export {postData}; 

