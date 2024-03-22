// Content-Type에서 이미지의 확장자 추출하는 함수
export default function getImageExtension(contentType: string) {
  switch (contentType) {
    case 'image/jpeg':
      return 'jpg';
    case 'image/png':
      return 'png';
    case 'image/gif':
      return 'gif';
    default:
      return 'jpg';
  }
}
