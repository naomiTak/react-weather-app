import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Register= () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
    // クライアントサイドでのみ実行
    setIsClient(true);

    if (isClient) {
        toast.success('メール認証を行い仮登録が完了しました！');
    }
  }, [isClient]);  // 依存配列に isClient を含める

    return (
    <>
        <Toaster />
        {/* ...他のコード... */}
    </>
    );
};

export default Error;