export function status(response: any) {
    return new Promise((resolve, reject) => {
        if (response.status >= 200 && response.status < 300) {
            return resolve(response);
        }
        return reject(response);
    });
}

export function text(response: any) {
    return response.text();
}

export function json(response: any) {
    return response.json();
}
