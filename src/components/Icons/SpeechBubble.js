import React from 'react';
import PropTypes from 'prop-types';

function SpeechBubble({ variant = 'speech' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="209" height="135" viewBox="0 0 209 135">
      {variant === 'thought' && (
        <path
          fill="#fff"
          d="M27.482 112.212c.114.043.21.112.285.207a1.43 1.43 0 0 0 .033.505c.043.103.384.536.296.1.381.323.302.744.732 1.008.441.271.761.419 1.106.743.197.185.417.405.672.494.259.091.968-.049 1.185.113l-.087.007c.364.123.659.362.996.53.4-.097.803-.188 1.216-.256.768-.126 1.6-.043 2.352-.189.339-.066 1.694-.26 2.038-.476.92-.578 1.614-.85 2.051-1.828.117-.261.226-.529.325-.8a3.046 3.046 0 0 1 .213-2.59c.111-.205.226-.408.345-.609.099-.231-.843-.448-.718-.653.02-.194.058-.375.106-.549.021-.826-.095-1.7-.389-2.472.294.299.588.439.803.765.102.154.169.328.232.503.231-.259.254-.473.553-.643-.016-.348-.019-.725-.061-.929-.156-.762-.194-1.498-.588-2.174-.669-1.146-1.629-1.905-2.781-2.57-1.321-.763-2.765-1.141-4.308-1.03-.8.057-1.542.436-2.315.501-.46.039-.649-.025-1.102.181-.284.129-.567.269-.84.42-2.293 1.272-3.869 3.224-3.897 5.932-.013 1.314-.672 2.536.082 3.838.181.312.497 1.003.74 1.29.216.259.507.402.725.631zm.266 9.234c.004-.072.107-.654.075-.703-.036-.331-.145-.468-.173-.635a5.387 5.387 0 0 0-.541-1.599c-.553-1.061-1.46-1.727-2.507-2.27a5.116 5.116 0 0 0-3.669-.394c-.26.068-.546.25-.811.273-.229.02-.42-.052-.641-.015-.529.089-1.254.631-1.664.969-.598.493-1.266 1.117-1.614 1.793-.497.965-.407 1.869-.43 2.94-.02.936-.381 1.892-.1 2.838.159.535.575.539.874.885a.394.394 0 0 1 .233.142c-.014.104-.092.219-.042.311.348.648 1.186 1.369 1.709 1.613.151.071.461.206.607.279.04.02.099.026.165.027.086-.025.174-.044.263-.054.675-.075 1.371-.091 1.993.207.222-.127.431-.276.599-.105.146.148 2.216-.324 3.849-1.16 1.033-1.341 1.304-1.347 1.833-2.914.15-.444-.003-2.412 0-2.416l-.008-.012zm-18.908 4.66l-1.364-.217c-1.211.426-1.55.209-2.821 1.364-.068.062-.171.048-.251.057-.489.715-.87 1.836-.87 2.767 0 1.372.623 2.596 1.599 3.411.793.492 1.501.372 2.236.623.466-.171 1.262-.075 1.75-.193.913-.222 1.639-.603 2.419-1.168a4.429 4.429 0 0 0 .898-2.673c.001-2.458-1.302-3.785-3.596-3.971z"
        />
      )}
      <path
        fill="#fff"
        d="M209 78.654c-.137 2.009-.823 4.103-1.333 6.041-.46 1.748-.869 3.277-2.534 4.259-1.017.6-1.84 1.12-3.066 1.136-.385.005-.771 0-1.156 0h-25.009c-1.447 0-2.846.239-4.288.397-2.58.283-5.325.042-7.927.021a703.353 703.353 0 0 1-9.303-.153c.208.136-.035.261-.158.308 2.448.11 4.896.188 7.346.221-1.13.36.359.586.776.641 1.664.218 3.354.272 5.029.36.536.028 6.773.126 6.748.715-.008.195-.778.309-.894.335-1.529.348-3.172.17-4.731.15a325.546 325.546 0 0 1-12.995-.455c-3.991-.212-7.98-.477-11.968-.733-3.601-.231-7.216 1.784-10.81 1.557a35.145 35.145 0 0 0-3.183-.036c-3.26-.066-6.521-1.505-9.784-1.332-3.017.16-6.02-1.12-9.003-.623-2.284.38-4.545.908-6.827 1.308-2.687.05-5.373.142-8.059.222-2.399.008-4.799.064-7.198.146-1.514.008-3.028-.001-4.543-.041a3.311 3.311 0 0 0-1.478.282c-5.158.224-13.561.142-18.407.176-4.232.03-8.465-.925-12.696-1.004-3.071-.057-6.328.04-9.354-.563a4.469 4.469 0 0 1-.861-.264c-.063-.026-.114-.162-.144-.173-.559-.203-1.468-.077-2.087-.102-3.369-.138-6.74-.239-10.111-.313-3.362-.074-6.725-.12-10.088-.146l-5.148-.04c-1.517-.012-3.033-.113-4.432-.741-2.657-1.193-4.099-3.686-4.337-6.465-.273-3.193-.095-4.635-.143-7.839-.049-3.248-.112-7.33-.188-10.577-.001-.043-.155-1.494.212-1.502.167-.004.262.403.344.496.152.173.116.315.314.175.297-.21.171-1.551.178-1.844.038-1.448.076-2.902-.032-4.348-.089-1.183-.258-2.364-.242-3.553-.375 1.305-1.138-.527-1.224-1.084-.141-.917-.061-1.922-.09-2.849-.014-.426-.455-5.485-.077-5.572.052-.012.06.11.112.099.199-.043-.306-2.306-.338-2.561a37.504 37.504 0 0 1-.237-3.399c-.163-5.247.186-10.504.338-15.747.079-2.74-.106-5.536.095-8.265.011-.142.054-1.734.373-1.615.212.079.233.953.455.935.333-.027.186-3.744.185-4.084-.004-1.601-.16-3.612.58-5.101.462-.929 1.834-1.858 2.726-2.395 1.349-.814 2.827-1.108 4.395-1.162 3.583-.123 7.197.037 10.784.009 3.386-.027 6.772-.062 10.158-.006 1.487.024 5.842.236 6.532.3.257.024 5.257.173 5.997.183 1.592.022 3.184.048 4.776.075 3.098.054 6.197-.892 9.295-.823 5.431.12 10.331.178 13.132.121 2.786-.057 5.572-.083 8.359-.088 5.299-.008 10.598.065 15.896.155 10.105.17 20.196.322 30.301.079 4.846-.116 9.725.093 14.57.227 4.732.131 9.463.31 14.19.569 3.689.201 7.382.433 11.055.834 2.065.226 4.093.21 6.173.21-.357-.619.687-.822 1.081-.91 2.585-.578 7.69-1.274 8.854-1.051.696.133 5.922.52 6.808.485 1.78-.07 3.561-.127 5.342-.182a946.64 946.64 0 0 1 5.326-.148c1.221-.03 2.367.031 3.455.657 3.065 1.764 2.555 6.307 2.601 9.321.115 7.359.211 14.718.352 22.076.069 3.567.149 7.133.255 10.699a638.706 638.706 0 0 0 .274 7.706c.008.185-.019 2.177.487 1.596-.118 1.755-.858 3.371-.82 5.144.044 2.072.093 4.143.149 6.214.111 4.104.248 9.04.435 13.141.114.2.286.304.46.108zM157.222 1.416c2.271.188 4.548.18 6.82.318 1.757.107 3.514.386 5.27.467.366.017 2.396.039 1.424-.792-1.105-.944-3.043-.957-4.283-1.178a14.365 14.365 0 0 0-3.512-.202c-1.936.119-3.876.089-5.81.247-.2.016-1.571-.027-1.653.344-.093.423 1.585.755 1.744.796zM38.577 92.332c-1.386.604-2.937.528-4.348.578-2.277.08-4.552.023-6.824-.07a157.08 157.08 0 0 1-6.574-.407c-.2-.017-1.735-.389-1.661.176.058.448.811.612 1.025.692 1.67.623 3.432.837 5.145 1.13 1.597.273 3.231.749 4.838.868 1.245.092 2.54-.173 3.79-.236 2.154-.107 4.304-.036 6.458-.318.323-.042 2.62-.171 2.378-1.06-.117-.432-1.089-.608-1.318-.683-.955-.314-1.934-.5-2.909-.67zM.007 32.388l2.503 1.464.129-11.698c-.879.091-.935.811-1.052 1.058-.382.808-.537 1.646-.695 2.478-.423 2.221-.604 4.464-.885 6.698z"
      />
      {variant === 'speech' && (
        <path
          fill="#fff"
          d="M48.35 92.297a71.092 71.092 0 0 1-1.342 7.254c-.371 1.534-1.815 5.595-2.153 6.465a28.132 28.132 0 0 1-2.056 4.185c-.831 1.398-1.772 2.73-2.742 4.034-.968 1.301-2.059 2.209-3.227 3.312-4.614 4.359-10.072 8.851-16.207 10.867-1.98.65-6.776 2.03-12.689 2.913.493 1.173 2.708 1.861 3.871 2.018 1.958.264 3.967.459 5.938.608 3.402.256 6.806-.342 10.172-.761 3.584-.445 6.977-.856 10.397-2.019 1.453-.494 3.38-.922 4.64-1.772 1.367-.923 2.756-1.71 4.222-2.497 1.836-.986 3.649-2.053 5.287-3.346.431-.34 3.934-3.246 3.557-3.773-.099-.138-.771.434-.795.453 1.318-1.261 2.792-2.285 3.926-3.727l-.405.94c.827-.786 1.741-1.552 2.307-2.557.287-.509.44-1.013.787-1.48.302-.407.636-.788.916-1.212 1.313-1.998 4.01-5.706 3.884-5.708.101.002.348-1.498.391-1.654.069-.248.301-.687.443-1.005.066-.147 2.627-5.256 3.552-11.537H48.35z"
        />
      )}
    </svg>
  );
}

SpeechBubble.propTypes = {
  variant: PropTypes.oneOf(['speech', 'thought'])
};

export default SpeechBubble;