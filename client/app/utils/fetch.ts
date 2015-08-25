export function status(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return response.text().then(function(text: any) {
        throw new Error(text);
    });
}

export function text(response: any) {
    return response.text();
}

export function json(response: any) {
    return response.json();
}
