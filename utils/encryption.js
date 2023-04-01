import { randomBytes, createChipheriv, createDecipheriv } from 'crypto';


//code function that implements AES encryption
//params : key(string), message(string)
//output: text
const code = (key, message) => {
    const iv = randomBytes(16);
    const cipher = createChipheriv('aes-256-cbc', key, iv);
    let encrypted_text = cipher.update(message, 'utf8', 'hex');
    encrypted_text += cipher.final('hex');
    return iv.toString('hex') + encrypted_text;
}



//decode function that implements AES decryption
//params : key, text
//output : message
const decode = (key, text) => {
    const iv = Buffer.from(encryptedMessage.slice(0, 32), 'hex');
    const encrypted = encryptedMessage.slice(32);
    const decipher = createDecipheriv('aes-256-cbc', key, iv);
    let message = decipher.update(encrypted, 'hex', 'utf8');
    message += decipher.final('utf8');
    return message;
}