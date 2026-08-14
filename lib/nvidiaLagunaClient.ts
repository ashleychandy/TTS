import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY || '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',
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

interface LagunaMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function queryLagunaModel(
  messages: LagunaMessage[],
  options?: {
    temperature?: number;
    topP?: number;
    maxTokens?: number;
    stream?: boolean;
  }
) {
  const completion = await openai.chat.completions.create({
    model: 'poolside/laguna-xs-2.1',
    messages,
    temperature: options?.temperature ?? 1,
    top_p: options?.topP ?? 0.95,
    max_tokens: options?.maxTokens ?? 8192,
    stream: options?.stream ?? false,
  });

  return completion.choices[0]?.message?.content || '';
}

export default openai;
