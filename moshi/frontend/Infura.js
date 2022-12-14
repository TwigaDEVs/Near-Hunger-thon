import { create } from "ipfs-http-client"

const projectId = "2IHRvFT45OgwWLAxh9VskodxGOh";
const projectSecret = "8b6ad7e4fb03a670df238c036b0c5035";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

export const uploadToIPFS = async (file) => {
  console.log("uploading .....")
    const subdomain = 'https://hambre.infura-ipfs.io';
    try {
      console.log("in try .....")
     const added = await client.add({ content: file });
     const URL = `${subdomain}/ipfs/${added.path}`;
     console.log("uploaded",URL)
     return URL;
   } catch (error) {
     console.log('Error uploading file to IPFS.');
   }
 };